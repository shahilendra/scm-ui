import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AnimalExaminationService } from './animal-examination.service';
import { config } from 'src/app/core/config';
@Component({
  selector: 'app-animal-examination',
  templateUrl: './animal-examination.component.html',
  styleUrls: ['./animal-examination.component.css']
})
export class AnimalExaminationComponent {
  entitys = [];
  displayedColumns: string[] = ['date', 'examinationType', 'result','diagnosis'];
  selectedRow: any;
  form!: FormGroup;
  examinationTypes:any = config.examinationType;
  constructor(private toastr: ToastrService, private animalExaminationService: AnimalExaminationService,
    private dialogRef: MatDialogRef<AnimalExaminationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {}
    ngOnInit() {
      this.getData();
      this.setForm();
    }
    
    save() {
      if(this.selectedRow != null) { 
        this.animalExaminationService.put(this.form.value, this.data.selectedAnimal.id, this.selectedRow.id)
          .subscribe((data)=>{
            this.toastr.success('Examination Save Sucessfully!', 'Examination');
            this.getData();
            this.clear();
          }, (error)=>{
            // this.toastr.error(error?.error?.message, 'MilkYield');
          });
      } else {
        this.animalExaminationService.post(this.form.value, this.data.selectedAnimal.id)
          .subscribe((data)=>{
            this.toastr.success('Examination Save Sucessfully!', 'Examination');
            this.clear();
            this.getData();
          }, (error)=>{
            // this.toastr.error(error?.error?.message, 'MilkYield');
          });
      }
      
    }
    clear() {
      this.form.patchValue({
        date: new Date(),
        examinationType: null,
        result: null,
        diagnosis: null,        
      });
      this.selectedRow = null;
    }
    
    setForm() {
      this.form = this.fb.group({
        date: [new Date(), [Validators.required]],
        examinationType: [null, [Validators.required]],
        result: [null],
        diagnosis: [null, [Validators.required]]
      });
    }
    getData(){
      this.animalExaminationService.get(this.data.selectedAnimal.id)
      .subscribe((data)=>{
        this.entitys = data;
      },
      (error)=>{
        // this.toastr.error(error?.error?.message, 'MilkYield');
      });
    }

    highlight(row: any){
      this.selectedRow = row;
      this.form.patchValue({
        date: row.date,
        examinationType: row.examinationType,
        result: row.result,
        diagnosis: row.diagnosis
      });
    }
    onNoClick() {
      this.dialogRef.close();
    }

}
