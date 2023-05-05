import { Component, Inject } from '@angular/core';
import { MilkYieldService } from './milk-yield.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-milk-yield',
  templateUrl: './milk-yield.component.html',
  styleUrls: ['./milk-yield.component.css']
})
export class MilkYieldComponent {
  entitys = [];
  displayedColumns: string[] = ['date','time', 'milkYield','milkingTime' ];
  selectedRow: any;
  form!: FormGroup;
  milkingTimes = ['Morning',"Afternoon", "Evening"]
  constructor(private toastr: ToastrService, private milkYieldService: MilkYieldService,
    private dialogRef: MatDialogRef<MilkYieldComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {}
    ngOnInit() {
      this.getData();
      this.setForm();
    }
    
    save() {
      if(this.selectedRow != null) { 
        this.milkYieldService.put(this.form.value, this.data.selectedAnimal.id, this.selectedRow.id)
          .subscribe((data)=>{
            this.toastr.success('MilkYield Save Sucessfully!', 'MilkYield');
            this.getData();
            this.clear();
          }, (error)=>{
            this.toastr.error(error?.error?.message, 'MilkYield');
          });
      } else {
        this.milkYieldService.post(this.form.value, this.data.selectedAnimal.id)
          .subscribe((data)=>{
            this.toastr.success('MilkYield Save Sucessfully!', 'MilkYield');
            this.clear();
            this.getData();
          }, (error)=>{
            this.toastr.error(error?.error?.message, 'MilkYield');
          });
      }
      
    }
    clear() {
      this.form.patchValue({
        date: new Date(),
        time: null,
        milkYield: null,
        milkingTime: null,
      });
      this.selectedRow = null;
    }
    
    setForm() {
      this.form = this.fb.group({
        date: [new Date(), [Validators.required]],
        milkYield: [null, [Validators.required]],
        time: [null],
        milkingTime: [null, [Validators.required]],
      });
    }
    getData(){
      this.milkYieldService.get(this.data.selectedAnimal.id)
      .subscribe((data)=>{
        this.entitys = data;
      },
      (error)=>{
        this.toastr.error(error?.error?.message, 'MilkYield');
      });
    }

    highlight(row: any){
      this.selectedRow = row;
      this.form.patchValue({
        date: row.date,
        milkYield: row.milkYield,
        time: row.time,
        milkingTime: row.milkingTime
      });
    }
    onNoClick() {
      this.dialogRef.close();
    }
}
