import { Component, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AnimalService } from '../animal.service';
import { MasterService } from 'src/app/core/master.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styleUrls: ['./update-animal.component.css']
})
export class UpdateAnimalComponent {
  calvingTypes: any[] = [];
  breeds: any[] = [];
  colors: any[] = [];
  occurrences: any[] = [];
  locations: any[] = [];
  groups: any[] = [];
  status: any[] = [];
  siblingsTypes: any[] = [];
  animals: any[] = [];
  form!: FormGroup;
  genders = ["Female","Male"];
  insurances = ["Available","None"];
  horns: any= ["Available","None"];
  constructor(private toastr: ToastrService, private animalService: AnimalService,
    private masterService: MasterService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateAnimalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit() {
    this.setForm();
    this.getAnimals();
    this.getCalvingTypes();
    this.getBreeds();
    this.getColors();
    this.getOccurrences();
    this.getLocations();
    this.getGroups();
    this.getStatus();
    this.getSiblingsTypes();
  }
  setForm() {
    this.form = this.fb.group({
      name: [this.data.selectedAnimal.name],
      earTag: [this.data.selectedAnimal.earTag, [Validators.required]],
      breedId: [this.data.selectedAnimal.breedId, [Validators.required]],
      gender: [this.data.selectedAnimal.gender,[Validators.required]],
      insurance: [this.data.selectedAnimal.insurance,[Validators.required]],
      // statusId: [this.data.selectedAnimal.statusId, [Validators.required]],
      colorId: [this.data.selectedAnimal.colorId,[Validators.required]],
      notes: [this.data.selectedAnimal.notes],
      purchasePrice: [this.data.selectedAnimal.purchasePrice],
      purchaseDate: [this.data.selectedAnimal.purchaseDate],
      purchaseBodyWeight: [this.data.selectedAnimal.purchaseBodyWeight],
      birthWeight:[this.data.selectedAnimal.birthWeight],
      birthDate: [this.data.selectedAnimal.birthDate],
      damEarTag: [this.data.selectedAnimal.damEarTag],
      sireRegisterId: [this.data.selectedAnimal.sireRegisterId],
      horn: [this.data.selectedAnimal.horn]
    });
  }
  save() {
    this.animalService.put(this.form.value, this.data.selectedAnimal.id)
    .subscribe((data)=>{
      this.toastr.success('Animal Save Sucessfully!', 'Animals');
      this.onNoClick();
    }, (error)=>{
    })
  }
  getAnimals() {
    this.animalService.getAnimals()
    .subscribe((data)=>{
      this.animals = data;
    },
    (error)=>{
    });
  }
  getCalvingTypes(){
    this.masterService.getCalvingTypes()
    .subscribe((data)=>{
      this.calvingTypes = data;
    },
    (error)=>{
    });
  }

  getBreeds(){
    this.masterService.getBreeds()
    .subscribe((data)=>{
      this.breeds = data;
    },
    (error)=>{
    });
  }

  getColors(){
    this.masterService.getColors()
    .subscribe((data)=>{
      this.colors = data;
    },
    (error)=>{
    });
  }

  getOccurrences(){
    this.masterService.getOccurrences()
    .subscribe((data)=>{
      this.occurrences = data;
    },
    (error)=>{
    });
  }

  getLocations(){
    this.masterService.getLocations()
    .subscribe((data)=>{
      this.locations = data;
    },
    (error)=>{
    });
  }

  getGroups(){
    this.masterService.getGroups()
    .subscribe((data)=>{
      this.groups = data;
    },
    (error)=>{
    });
  }

  getStatus(){
    this.masterService.getStatus()
    .subscribe((data)=>{
      this.status = data;
    },
    (error)=>{
    });
  }

  getSiblingsTypes(){
    this.masterService.getSiblingsTypes()
    .subscribe((data)=>{
      this.siblingsTypes = data;
    },
    (error)=>{
    });
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
