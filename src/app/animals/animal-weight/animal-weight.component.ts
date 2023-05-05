import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AnimalWeightService } from './animal-weight.service';

@Component({
  selector: 'app-animal-weight',
  templateUrl: './animal-weight.component.html',
  styleUrls: ['./animal-weight.component.css']
})
export class AnimalWeightComponent {
  entitys = [];
  displayedColumns: string[] = ['date', 'weight', 'time'];
  selectedRow: any;
  form!: FormGroup;
  constructor(private toastr: ToastrService, private animalWeightService: AnimalWeightService,
    private dialogRef: MatDialogRef<AnimalWeightComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {}
    ngOnInit() {
      this.getData();
      this.setForm();
    }
    
    save() {
      if(this.selectedRow != null) { 
        this.animalWeightService.put(this.form.value, this.data.selectedAnimal.id, this.selectedRow.id)
          .subscribe((data)=>{
            this.toastr.success('Weight Save Sucessfully!', 'Weight');
            this.getData();
            this.clear();
          }, (error)=>{
            this.toastr.error(error?.error?.message, 'Weight');
          });
      } else {
        this.animalWeightService.post(this.form.value, this.data.selectedAnimal.id)
          .subscribe((data)=>{
            this.toastr.success('Weight Save Sucessfully!', 'Weight');
            this.clear();
            this.getData();
          }, (error)=>{
            this.toastr.error(error?.error?.message, 'Weight');
          });
      }
      
    }
    clear() {
      this.form.patchValue({
        date: new Date(),
        time: null,
        weight: null,
      });
      this.selectedRow = null;
    }
    
    setForm() {
      this.form = this.fb.group({
        date: [new Date(), [Validators.required]],
        weight: [null, [Validators.required]],
        time: [null],
      });
    }
    getData(){
      this.animalWeightService.get(this.data.selectedAnimal.id)
      .subscribe((data)=>{
        this.entitys = data;
      },
      (error)=>{
        this.toastr.error(error?.error?.message, 'Weight');
      });
    }

    highlight(row: any){
      this.selectedRow = row;
      this.form.patchValue({
        date: row.date,
        weight: row.weight,
        time: row.time
      });
    }
    onNoClick() {
      this.dialogRef.close();
    }
}
