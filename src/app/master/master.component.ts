import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../core/master.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  calvingTypes = [];
  breeds= [];
  colors= [];
  occurrences = [];
  locations = [];
  groups = [];
  status = [];
  siblingsTypes = [];
  displayedColumns: string[] = ['name', 'isActive'];
  constructor(private toastr: ToastrService, private masterService: MasterService) {}
  ngOnInit() {
    this.getCalvingTypes();
    this.getBreeds();
    this.getColors();
    this.getOccurrences();
    this.getLocations();
    this.getGroups();
    this.getStatus();
    this.getSiblingsTypes();
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
      // this.toastr.success('Locations Load Sucessfully!', 'Master');
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
