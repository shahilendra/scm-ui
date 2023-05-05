import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BodyScoreService } from './body-score.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-body-score',
  templateUrl: './body-score.component.html',
  styleUrls: ['./body-score.component.css']
})
export class BodyScoreComponent {
  entitys = [];
  displayedColumns: string[] = ['date', 'score'];
  selectedRow: any;
  form!: FormGroup;
  bodyScores = ["1.00","1.25","1.50","1.75","2.00","2.25","2.50","2.75","3.00","3.25","3.50","3.75","4.00","4.25","4.50","4.75", "5.00"];
  constructor(private toastr: ToastrService, private bodyScoreService: BodyScoreService,
    private dialogRef: MatDialogRef<BodyScoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {}
    ngOnInit() {
      this.getData();
      this.setForm();
    }
    
    save() {
      if(this.selectedRow != null) { 
        this.bodyScoreService.put(this.form.value, this.data.selectedAnimal.id, this.selectedRow.id)
          .subscribe((data)=>{
            this.toastr.success('BodyScore Save Sucessfully!', 'BodyScore');
            this.getData();
            this.clear();
          }, (error)=>{
            this.toastr.error(error?.error?.message, 'BodyScore');
          });
      } else {
        this.bodyScoreService.post(this.form.value, this.data.selectedAnimal.id)
          .subscribe((data)=>{
            this.toastr.success('BodyScore Save Sucessfully!', 'BodyScore');
            this.clear();
            this.getData();
          }, (error)=>{
            this.toastr.error(error?.error?.message, 'BodyScore');
          });
      }
      
    }
    clear() {
      this.form.patchValue({
        date: new Date(),
        score: null
      });
      this.selectedRow = null;
    }
    
    setForm() {
      this.form = this.fb.group({
        date: [new Date(), [Validators.required]],
        score: [null, [Validators.required]]
      });
    }
    getData(){
      this.bodyScoreService.get(this.data.selectedAnimal.id)
      .subscribe((data)=>{
        this.entitys = data;
      },
      (error)=>{
        this.toastr.error(error?.error?.message, 'BodyScore');
      });
    }

    highlight(row: any){
      this.selectedRow = row;
      this.form.patchValue({
        date: row.date,
        score: row.score
      });
    }
    onNoClick() {
      this.dialogRef.close();
    }
}
