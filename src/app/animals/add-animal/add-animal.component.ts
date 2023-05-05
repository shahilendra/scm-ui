import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AnimalService } from '../animal.service';
import { MasterService } from 'src/app/core/master.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent {
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
  constructor(private toastr: ToastrService, private animalService: AnimalService,
    private masterService: MasterService,
    private fb: FormBuilder,
    private router: Router) {}
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
      name: [null],
      earTag: [null, [Validators.required]],
      breedId: [null, [Validators.required]],
      gender: ["Female",[Validators.required]],
      insurance: ["None",[Validators.required]],
      statusId: [null, [Validators.required]],
      colorId: [null,[Validators.required]],
      notes: [null],
      purchasePrice: [null],
      purchaseDate: [null],
      purchaseBodyWeight: [null],
      birthWeight:[null],
      birthDate: [null],
    });
  }
  save() {
    this.animalService.postAnimal(this.form.value)
    .subscribe((data)=>{
      this.toastr.success('Animal Save Sucessfully!', 'Animals');
      this.router.navigate(['/animals']);
    }, (error)=>{
      this.toastr.error(error?.error?.message, 'Animals');
    })
  }
  isValid() {
    return false;
  }
  getAnimals() {
    this.animalService.getAnimals()
    .subscribe((data)=>{
      this.animals = data;
      // this.toastr.success('Animals Load Sucessfully!', 'Master');
    },
    (error)=>{
      this.toastr.error(error?.error?.message, 'Master');
    });
  }
  getCalvingTypes(){
    this.masterService.getCalvingTypes()
    .subscribe((data)=>{
      this.calvingTypes = data;
      // this.toastr.success('CalvingTypes Load Sucessfully!', 'Master');
    },
    (error)=>{
      this.toastr.error(error?.error?.message, 'Master');
    });
  }

  getBreeds(){
    this.masterService.getBreeds()
    .subscribe((data)=>{
      this.breeds = data;
      // this.toastr.success('Bread Load Sucessfully!', 'Master');
    },
    (error)=>{
      this.toastr.error(error?.error?.message, 'Master');
    });
  }

  getColors(){
    this.masterService.getColors()
    .subscribe((data)=>{
      this.colors = data;
      // this.toastr.success('Color Load Sucessfully!', 'Master');
    },
    (error)=>{
      this.toastr.error(error?.error?.message, 'Master');
    });
  }

  getOccurrences(){
    this.masterService.getOccurrences()
    .subscribe((data)=>{
      this.occurrences = data;
      // this.toastr.success('Occurrences Load Sucessfully!', 'Master');
    },
    (error)=>{
      this.toastr.error(error?.error?.message, 'Master');
    });
  }

  getLocations(){
    this.masterService.getLocations()
    .subscribe((data)=>{
      this.locations = data;
     //  this.toastr.success('Locations Load Sucessfully!', 'Master');
    },
    (error)=>{
      this.toastr.error(error?.error?.message, 'Master');
    });
  }

  getGroups(){
    this.masterService.getGroups()
    .subscribe((data)=>{
      this.groups = data;
      // this.toastr.success('Groups Load Sucessfully!', 'Master');
    },
    (error)=>{
      this.toastr.error(error?.error?.message, 'Master');
    });
  }

  getStatus(){
    this.masterService.getStatus()
    .subscribe((data)=>{
      this.status = data;
      // this.toastr.success('Status Load Sucessfully!', 'Master');
    },
    (error)=>{
      this.toastr.error(error?.error?.message, 'Master');
    });
  }

  getSiblingsTypes(){
    this.masterService.getSiblingsTypes()
    .subscribe((data)=>{
      this.siblingsTypes = data;
      // this.toastr.success('SiblingsTypes Load Sucessfully!', 'Master');
    },
    (error)=>{
      this.toastr.error(error?.error?.message, 'Master');
    });
  }
}
