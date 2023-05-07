import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AnimalVaccinationService } from './animal-vaccination.service';
import { medicineList } from 'src/app/core/medicine-list';
@Component({
  selector: 'app-animal-vaccination',
  templateUrl: './animal-vaccination.component.html',
  styleUrls: ['./animal-vaccination.component.css']
})
export class AnimalVaccinationComponent {
  entitys = [];
  displayedColumns: string[] = ['date','vaccine', 'notes' ];
  selectedRow: any;
  form!: FormGroup;
  medicineList = medicineList;
  constructor(private toastr: ToastrService, private animalVaccinationService: AnimalVaccinationService,
    private dialogRef: MatDialogRef<AnimalVaccinationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {}
    ngOnInit() {
      this.getData();
      this.setForm();
    }
    
    save() {
      if(this.selectedRow != null) { 
        this.animalVaccinationService.put(this.form.value, this.data.selectedAnimal.id, this.selectedRow.id)
          .subscribe((data)=>{
            this.toastr.success('Vaccination Save Sucessfully!', 'Vaccination');
            this.getData();
            this.clear();
          }, (error)=>{
            // this.toastr.error(error?.error?.message, 'MilkYield');
          });
      } else {
        this.animalVaccinationService.post(this.form.value, this.data.selectedAnimal.id)
          .subscribe((data)=>{
            this.toastr.success('Vaccination Save Sucessfully!', 'Vaccination');
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
        vaccine: null,
        notes: null,
      });
      this.selectedRow = null;
    }
    
    setForm() {
      this.form = this.fb.group({
        date: [new Date(), [Validators.required]],
        vaccine: [null, [Validators.required]],
        notes: [null]
      });
    }
    getData(){
      this.animalVaccinationService.get(this.data.selectedAnimal.id)
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
        vaccine: row.vaccine,
        notes: row.notes
      });
    }
    onNoClick() {
      this.dialogRef.close();
    }
}
