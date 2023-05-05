import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LactationService } from './lactation.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lactation',
  templateUrl: './lactation.component.html',
  styleUrls: ['./lactation.component.css']
})
export class LactationComponent {
  entitys = [];
  displayedColumns: string[] = ['lactationNo','startDate', 'endDate'];
  selectedRow: any;
  form!: FormGroup;
  constructor(private toastr: ToastrService, private lactationService: LactationService,
    private dialogRef: MatDialogRef<LactationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {}
    ngOnInit() {
      this.getData();
      this.setForm();
    }
    
    save() {
      if(this.selectedRow != null) { 
        this.lactationService.put(this.form.value, this.data.selectedAnimal.id, this.selectedRow.id)
          .subscribe((data)=>{
            this.toastr.success('Lactation Save Sucessfully!', 'Lactation');
            this.getData();
            this.clear();
          }, (error)=>{
            this.toastr.error(error?.error?.message, 'Lactation');
          });
      } else {
        this.lactationService.post(this.form.value, this.data.selectedAnimal.id)
          .subscribe((data)=>{
            this.toastr.success('Lactation Save Sucessfully!', 'Lactation');
            this.clear();
            this.getData();
          }, (error)=>{
            this.toastr.error(error?.error?.message, 'Lactation');
          });
      }
      
    }
    clear() {
      this.form.patchValue({
        endDate: null,
        startDate: new Date(),
        lactationNo: null,
      });
      this.selectedRow = null;
    }
    setForm() {
      this.form = this.fb.group({
        startDate: [new Date(), [Validators.required]],
        endDate: [null],
        lactationNo: [null]
      });
    }
    getData(){
      this.lactationService.get(this.data.selectedAnimal.id)
      .subscribe((data)=>{
        this.entitys = data;
      },
      (error)=>{
        this.toastr.error(error?.error?.message, 'Lactation');
      });
    }
    highlight(row: any){
      this.selectedRow = row;
      this.form.patchValue({
        startDate: row.startDate,
        endDate: row.endDate,
        lactationNo: row.lactationNo
      });
    }
    onNoClick() {
      this.dialogRef.close();
    }
}
