import { Component, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InseminationService } from '../insemination.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insemination',
  templateUrl: './insemination.component.html',
  styleUrls: ['./insemination.component.css']
})
export class InseminationComponent {
  entitys = [];
  displayedColumns: string[] = ['date', 'examinationDate', 'time','status','methodId','detectionTypeId','bullEarTag', 'spermaNo', "notes"];
  selectedRow: any;
  form!: FormGroup;
  methods = ['Artificial Insemination', 'Natural Mating', 'Embryo transfer'];
  detectionTypes = ['Synchronization', 'Observation', 'Pedometer'];
  constructor(private toastr: ToastrService, private inseminationService: InseminationService,
    private dialogRef: MatDialogRef<InseminationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {}
    ngOnInit() {
      this.getData();
      this.setForm();
    }
    
    save() {
      if(this.selectedRow != null) { 
        this.inseminationService.put(this.form.value, this.data.selectedAnimal.id, this.selectedRow.id)
          .subscribe((data)=>{
            this.toastr.success('Insemination Save Sucessfully!', 'Insemination');
            this.getData();
            this.clear();
          }, (error)=>{
            this.toastr.error(error?.error?.message, 'Insemination');
          });
      } else {
        this.inseminationService.post(this.form.value, this.data.selectedAnimal.id)
          .subscribe((data)=>{
            this.toastr.success('Insemination Save Sucessfully!', 'Insemination');
            this.clear();
            this.getData();
          }, (error)=>{
            this.toastr.error(error?.error?.message, 'Insemination');
          });
      }
      
    }
    clear() {
      this.form.patchValue({
        notes: null,
        date: new Date(),
        time: null,
        examinationDate: new Date(),
        price: null,
        staff: null,
        methodId: null,
        detectionTypeId: null,
        bullEarTag: null,
        spermaNo: null
      });
      this.selectedRow = null;
    }
    setForm() {
      this.form = this.fb.group({
        notes: [null, [Validators.required]],
        date: [new Date(), [Validators.required]],
        time: [null],
        examinationDate: [new Date(), [Validators.required]],
        price: [null],
        staff: [null],
        methodId: [null],
        detectionTypeId: [null],
        bullEarTag: [null],
        spermaNo: [null],
      });
    }
    getData(){
      this.inseminationService.get(this.data.selectedAnimal.id)
      .subscribe((data)=>{
        this.entitys = data;
      },
      (error)=>{
        this.toastr.error(error?.error?.message, 'Insemination');
      });
    }
    highlight(row: any){
      this.selectedRow = row;
      this.form.patchValue({
        notes: row.notes,
        date: row.date,
        time: row.time,
        examinationDate: row.examinationDate,
        price: row.price,
        staff: row.staff,
        methodId: row.methodId,
        detectionTypeId: row.detectionTypeId,
        bullEarTag: row.bullEarTag,
        spermaNo: row.spermaNo
      });
    }
    onNoClick() {
      this.dialogRef.close();
    }
}
