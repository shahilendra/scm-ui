import { Component, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AnimalGroupService } from './animal-group.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterService } from 'src/app/core/master.service';

@Component({
  selector: 'app-animal-group',
  templateUrl: './animal-group.component.html',
  styleUrls: ['./animal-group.component.css']
})
export class AnimalGroupComponent {
  entitys = [];
  displayedColumns: string[] = ['name'];
  selectedRow: any;
  form!: FormGroup;
  groups: any = [];
  constructor(private toastr: ToastrService, private animalGroupService: AnimalGroupService,
    private dialogRef: MatDialogRef<AnimalGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder, private masterService: MasterService) {}
    ngOnInit() {
      this.getData();
      this.setForm();
      this.getLocations();
    }
    
    save() {
      if(this.selectedRow != null) { 
        this.animalGroupService.put(this.form.value, this.data.selectedAnimal.id, this.selectedRow.id)
          .subscribe((data)=>{
            this.toastr.success('Group Save Sucessfully!', 'Groups');
            this.getData();
            this.clear();
          }, (error)=>{
            this.toastr.error(error?.error?.message, 'Groups');
          });
      } else {
        this.animalGroupService.post(this.form.value, this.data.selectedAnimal.id)
          .subscribe((data)=>{
            this.toastr.success('Group Save Sucessfully!', 'Groups');
            this.clear();
            this.getData();
          }, (error)=>{
            this.toastr.error(error?.error?.message, 'Groups');
          });
      }
      
    }
    clear() {
      this.form.patchValue({
        groupId: null,
      });
      this.selectedRow = null;
    }
    setForm() {
      this.form = this.fb.group({
        groupId: [null, [Validators.required]]
      });
    }
    getData(){
      this.animalGroupService.get(this.data.selectedAnimal.id)
      .subscribe((data)=>{
        this.entitys = data;
      },
      (error)=>{
        this.toastr.error(error?.error?.message, 'Groups');
      });
    }
    highlight(row: any){
      this.selectedRow = row;
      this.form.patchValue({
        groupId: row.groupId
      });
    }
    onNoClick() {
      this.dialogRef.close();
    }

    getLocations(){
      this.masterService.getGroups()
      .subscribe((data)=>{
        this.groups = data;
      },
      (error)=>{
        this.toastr.error(error?.error?.message, 'Groups');
      });
    }
}
