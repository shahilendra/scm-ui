import { Component, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AnimalService } from '../animal.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-animal-others-info',
  templateUrl: './animal-others-info.component.html',
  styleUrls: ['./animal-others-info.component.css']
})
export class AnimalOthersInfoComponent {
  othersInfo: any;
  calfColumns: string[] = ['name', 'earTag','birthDate','calvingType','breed','gender'];
  siblingColumns: string[] = ['name', 'earTag','birthDate','calvingType','breed','gender', 'siblingType'];
  constructor(private toastr: ToastrService, private animalService: AnimalService,
    private dialogRef: MatDialogRef<AnimalOthersInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
    ngOnInit() {
      this.getAnimals();
    }
    getAnimals() {
      this.animalService.getOthersInfo(this.data.selectedAnimal.id)
      .subscribe((data)=>{
        this.othersInfo = data;
      },
      (error)=>{
      });
    }
  onNoClick() {
    this.dialogRef.close();
  }
}
