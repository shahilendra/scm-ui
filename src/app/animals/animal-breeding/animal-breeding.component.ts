import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AnimalBreedingService } from './animal-breeding.service';

@Component({
  selector: 'app-animal-breeding',
  templateUrl: './animal-breeding.component.html',
  styleUrls: ['./animal-breeding.component.css']
})
export class AnimalBreedingComponent {
  entitys = [];
  displayedColumns: string[] = ['date', 'time', 'diagnosisType'];
  selectedRow: any;
  form!: FormGroup;
  heatDiagnosisType: any = ['Moaning', 'Frequent Urination', 'Go Above', 'Bloody vaginal discharge',
                            'Mucus Flow', 'Rubbing', 'Other'];
  constructor(private toastr: ToastrService, private animalBreedingService: AnimalBreedingService,
    private dialogRef: MatDialogRef<AnimalBreedingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {}
    ngOnInit() {
      this.getData();
      this.setForm();
    }
    
    save() {
      if(this.selectedRow != null) { 
        this.animalBreedingService.put(this.form.value, this.data.selectedAnimal.id, this.selectedRow.id)
          .subscribe((data)=>{
            this.toastr.success('Breeding Save Sucessfully!', 'Breeding');
            this.getData();
            this.clear();
          }, (error)=>{
            // this.toastr.error(error?.error?.message, 'MilkYield');
          });
      } else {
        this.animalBreedingService.post(this.form.value, this.data.selectedAnimal.id)
          .subscribe((data)=>{
            this.toastr.success('Breeding Save Sucessfully!', 'Breeding');
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
        diagnosisType: null    
      });
      this.selectedRow = null;
    }
    
    setForm() {
      this.form = this.fb.group({
        date: [new Date(), [Validators.required]],
        diagnosisType: [null, [Validators.required]]
      });
    }
    getData(){
      this.animalBreedingService.get(this.data.selectedAnimal.id)
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
        diagnosisType: row.diagnosisType
      });
    }
    onNoClick() {
      this.dialogRef.close();
    }

}
