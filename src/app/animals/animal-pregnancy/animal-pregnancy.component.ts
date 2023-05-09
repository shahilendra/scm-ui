import { Component, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AnimalPregnancyService } from './animal-pregnancy.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-animal-pregnancy',
  templateUrl: './animal-pregnancy.component.html',
  styleUrls: ['./animal-pregnancy.component.css']
})
export class AnimalPregnancyComponent {
  entitys = [];
  displayedColumns: string[] = ['date', 'time','status','veterinarian','veterinarianPhone','notes'];
  selectedRow: any;
  form!: FormGroup;
  status = ['Pregnant', 'Not Pregnant', 'Uncertain', 'Abortion'];

  constructor(private toastr: ToastrService, private animalPregnancyService: AnimalPregnancyService,
    private dialogRef: MatDialogRef<AnimalPregnancyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {}
    ngOnInit() {
      this.getData();
      this.setForm();
    }
    
    save() {
      if(this.selectedRow != null) { 
        this.animalPregnancyService.put(this.form.value, this.data.selectedAnimal.id, this.selectedRow.id)
          .subscribe((data)=>{
            this.toastr.success('Pregnancy Save Sucessfully!', 'Pregnancy');
            this.getData();
            this.clear();
          }, (error)=>{
          });
      } else {
        this.animalPregnancyService.post(this.form.value, this.data.selectedAnimal.id)
          .subscribe((data)=>{
            this.toastr.success('Pregnancy Save Sucessfully!', 'Pregnancy');
            this.clear();
            this.getData();
          }, (error)=>{
          });
      }
      
    }
    clear() {
      this.form.patchValue({
        notes: null,
        date: new Date(),
        time: null,
        veterinarian: null,
        veterinarianPhone: null,
        status: null
      });
      this.selectedRow = null;
    }
    setForm() {
      this.form = this.fb.group({
        notes: [null],
        date: [new Date(), [Validators.required]],
        time: [null],
        veterinarian: [null, [Validators.required]],
        veterinarianPhone: [null],
        status: [null, [Validators.required]]
      });
    }
    getData(){
      this.animalPregnancyService.get(this.data.selectedAnimal.id)
      .subscribe((data)=>{
        this.entitys = data;
      },
      (error)=>{
      });
    }
    highlight(row: any){
      this.selectedRow = row;
      this.form.patchValue({
        notes: row.notes,
        date: row.date,
        status: row.status,
        time: row.time,
        veterinarian: row.veterinarian,
        veterinarianPhone: row.veterinarianPhone
      });
    }
    onNoClick() {
      this.dialogRef.close();
    }
}
