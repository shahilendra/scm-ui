import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AnimalService } from './animal.service';
import {MatDialog} from '@angular/material/dialog';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { InseminationComponent } from './insemination/insemination.component';
import { InseminationService } from './insemination.service';
import { LactationComponent } from './lactation/lactation.component';
import { AnimalWeightComponent } from './animal-weight/animal-weight.component';
import { BodyScoreComponent } from './body-score/body-score.component';
import { LocationComponent } from './location/location.component';
import { MilkYieldComponent } from './milk-yield/milk-yield.component';
import { AnimalGroupComponent } from './animal-group/animal-group.component';
import { DatePipe } from '@angular/common';
import { AnimalGroupService } from './animal-group/animal-group.service';
import { AnimalExaminationComponent } from './animal-examination/animal-examination.component';
import { AnimalVaccinationComponent } from './animal-vaccination/animal-vaccination.component';
import { AnimalBreedingComponent } from './animal-breeding/animal-breeding.component';
import { AnimalBreedingService } from './animal-breeding/animal-breeding.service';
import { AnimalPregnancyComponent } from './animal-pregnancy/animal-pregnancy.component';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  providers: [DatePipe]
})
export class AnimalsComponent {
  animals = [];
  displayedColumns: string[] = ['earTag', 'breedName', "statusName"];
  selectedAnimal: any;
  profileData: any;
  groups: any = [];
  breedings: any = [];
  constructor(private toastr: ToastrService, private animalService: AnimalService,
    private dialog: MatDialog,  private inseminationService: InseminationService,
    private datePipe: DatePipe,
    private animalGroupService: AnimalGroupService,
    private animalBreedingService: AnimalBreedingService) {}
  ngOnInit() {
    this.getAnimals();
  }

  getProfile() {
    this.animalService.getProfile(this.selectedAnimal.id)
    .subscribe((data)=>{
      this.profileData = data;
      // this.toastr.success('Animal Profile Load Sucessfully!', 'Animal');
    },
    (error)=>{
      // this.toastr.error(error?.error?.message, 'Animals');
    });
  }
  getAnimals(){
    this.animalService.getAnimals()
    .subscribe((data)=>{
      this.animals = data;
      this.selectedAnimal = null;
      // this.toastr.success('Animals Load Sucessfully!', 'Animals');
    },
    (error)=>{
      // this.toastr.error(error?.error?.message, 'Animals');
    });
  }
  highlight(row: any){
    this.selectedAnimal = row;
    this.getProfile();
    this.getData();
    this.getBreeding();
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
      this.getProfile();
    });
  }
  inseminationStatusChanged(status: any, id: any) {
    this.inseminationService.putStatus(status, this.selectedAnimal.id, id)
      .subscribe((data)=>{
        this.getProfile();
        this.toastr.success('Insemination Status Changed Sucessfully!', 'Animals');
      },
      (error)=>{
        // this.toastr.error(error?.error?.message, 'Animals');
      });
  }

  openLactation(): void {
    const dialogRef = this.dialog.open(LactationComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProfile();
    });
  }
  openWeight(): void {
    const dialogRef = this.dialog.open(AnimalWeightComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProfile();
    });
  }
  openBodyScore(): void {
    const dialogRef = this.dialog.open(BodyScoreComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProfile();
    });
  }
  
  location() {
    const dialogRef = this.dialog.open(LocationComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProfile();
    });
  }
  milkYield() {
    const dialogRef = this.dialog.open(MilkYieldComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProfile();
    });
  }
  group() {
    const dialogRef = this.dialog.open(AnimalGroupComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProfile();
      this.getData();
    });
  }
  getLactationString(): string {
    let value = '';
    // 3 - Lact. no and 5. day(s)
    if(this.profileData?.lactationNo) {
      value = `${this.profileData?.lactationNo} - Lact. no and `;
    }
    if(this.profileData?.lactationEndDate) {
      let datePipeString = this.datePipe.transform(Date.now(),'dd/MM/yyyy');      
      value = `${value}${datePipeString} end date`;
    } else if(this.profileData?.lactationDays){
      value = `${value}${this.profileData?.lactationDays}. day(s)`;
    }
    return value;
  }
  getData(){
    this.animalGroupService.get(this.selectedAnimal.id)
    .subscribe((data)=>{
      this.groups = data;
    },
    (error)=>{
      // this.toastr.error(error?.error?.message, 'Groups');
    });
  }

  getBreeding(){
    this.animalBreedingService.get(this.selectedAnimal.id)
    .subscribe((data)=>{
      this.breedings = data;
    },
    (error)=>{
      // this.toastr.error(error?.error?.message, 'Groups');
    });
  }
  examination() {
    const dialogRef = this.dialog.open(AnimalExaminationComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProfile();
    });
  }
  vaccination() {
    const dialogRef = this.dialog.open(AnimalVaccinationComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProfile();
    });
  }
  breedinTypes() {
    const dialogRef = this.dialog.open(AnimalBreedingComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProfile();
      this.getBreeding();
    });
  }

  pregnancyCheck() {
    const dialogRef = this.dialog.open(AnimalPregnancyComponent, {
      data: {selectedAnimal: this.selectedAnimal},
      width: '800px',
      height: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProfile();
    });
  }
}
