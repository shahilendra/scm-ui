import { Component, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotesService } from '../notes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent {
  notes = [];
  displayedColumns: string[] = ['date', 'time', "massage"];
  selectedNote: any;
  form!: FormGroup;
  constructor(private toastr: ToastrService, private notesService: NotesService,
    private dialogRef: MatDialogRef<AddNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {}
  ngOnInit() {
    this.getNotes();
    this.setForm();
  }
  setForm() {
    this.form = this.fb.group({
      massage: [null, [Validators.required]],
      date: [new Date(), [Validators.required]],
    });
  }
  clear() {
    this.form.patchValue({
      massage: '',
      date: new Date(),
    });
    this.selectedNote = null;
  }
  save() {
    if(this.selectedNote != null) { 
      this.notesService.put(this.form.value, this.data.selectedAnimal.id, this.selectedNote.id)
        .subscribe((data)=>{
          this.toastr.success('Note Save Sucessfully!', 'Note');
          this.getNotes();
          this.clear();
        }, (error)=>{
          this.toastr.error(error?.error?.message, 'Note');
        });
    } else {
      this.notesService.post(this.form.value, this.data.selectedAnimal.id)
        .subscribe((data)=>{
          this.toastr.success('Note Save Sucessfully!', 'Note');
          this.getNotes();
          this.form.patchValue({
            massage: '',
            date: new Date(),
          })
        }, (error)=>{
          this.toastr.error(error?.error?.message, 'Note');
        });
    }
    
  }
  getNotes(){
    this.notesService.get(this.data.selectedAnimal.id)
    .subscribe((data)=>{
      this.notes = data;
      this.toastr.success('Notes Load Sucessfully!', 'Notes');
    },
    (error)=>{
      this.toastr.error(error?.error?.message, 'Notes');
    });
  }
  highlight(row: any){
    this.selectedNote = row;
    this.form.patchValue({
      massage: row.massage,
      date: row.date,
    });
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
