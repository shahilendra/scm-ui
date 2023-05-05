import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AnimalService } from './animal.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { InseminationComponent } from './insemination/insemination.component';
import { InseminationService } from './insemination.service';
import { LactationComponent } from './lactation/lactation.component';
import { AnimalWeightComponent } from './animal-weight/animal-weight.component';
import { BodyScoreComponent } from './body-score/body-score.component';
import { LocationComponent } from './location/location.component';
import { MilkYieldComponent } from './milk-yield/milk-yield.component';
import { AnimalGroupComponent } from './animal-group/animal-group.component';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent {
  animals = [];
  displayedColumns: string[] = ['earTag', 'breedName', "statusName"];
  selectedAnimal: any;
  constructor(private toastr: ToastrService, private animalService: AnimalService,
    private dialog: MatDialog,  private inseminationService: InseminationService) {}
  ngOnInit() {
    this.getAnimals();
  }
  getAnimals(){
    this.animalService.getAnimals()
    .subscribe((data)=>{
      this.animals = data;
      this.selectedAnimal = null;
      this.toastr.success('Animals Load Sucessfully!', 'Animals');
    },
    (error)=>{
      this.toastr.error(error?.error?.message, 'Animals');
    });
  }
  highlight(row: any){
    this.selectedAnimal = row;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNotesComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '600px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.toastr.success('Notes Added Sucessfully!', 'Notes');
    });
  }
  

  openInsemination(): void {
    const dialogRef = this.dialog.open(InseminationComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.toastr.success('Notes Added Sucessfully!', 'Notes');
    });
  }
  inseminationStatusChanged(status: any, id: any) {
    this.inseminationService.putStatus(status, this.selectedAnimal.id, id)
      .subscribe((data)=>{
        this.getAnimals();
        this.toastr.success('Insemination Status Changed Sucessfully!', 'Animals');
      },
      (error)=>{
        this.toastr.error(error?.error?.message, 'Animals');
      });
  }

  openLactation(): void {
    const dialogRef = this.dialog.open(LactationComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openWeight(): void {
    const dialogRef = this.dialog.open(AnimalWeightComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openBodyScore(): void {
    const dialogRef = this.dialog.open(BodyScoreComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  
  location() {
    const dialogRef = this.dialog.open(LocationComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  milkYield() {
    const dialogRef = this.dialog.open(MilkYieldComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  group() {
    const dialogRef = this.dialog.open(AnimalGroupComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
