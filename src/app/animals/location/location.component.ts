import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LocationService } from './location.service';
import { MasterService } from 'src/app/core/master.service';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  entitys = [];
  displayedColumns: string[] = ['name','startDate', 'endDate'];
  selectedRow: any;
  form!: FormGroup;
  locations: any = [];
  constructor(private toastr: ToastrService, private locationService: LocationService,
    private dialogRef: MatDialogRef<LocationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder, private masterService: MasterService) {}
    ngOnInit() {
      this.getData();
      this.setForm();
      this.getLocations();
    }
    
    save() {
      if(this.selectedRow != null) { 
        this.locationService.put(this.form.value, this.data.selectedAnimal.id, this.selectedRow.id)
          .subscribe((data)=>{
            this.toastr.success('Location Save Sucessfully!', 'Location');
            this.getData();
            this.clear();
          }, (error)=>{
            this.toastr.error(error?.error?.message, 'Location');
          });
      } else {
        this.locationService.post(this.form.value, this.data.selectedAnimal.id)
          .subscribe((data)=>{
            this.toastr.success('Location Save Sucessfully!', 'Location');
            this.clear();
            this.getData();
          }, (error)=>{
            this.toastr.error(error?.error?.message, 'Location');
          });
      }
      
    }
    clear() {
      this.form.patchValue({
        endDate: null,
        startDate: new Date(),
        locationId: null,
      });
      this.selectedRow = null;
    }
    setForm() {
      this.form = this.fb.group({
        startDate: [new Date(), [Validators.required]],
        endDate: [null],
        locationId: [null, [Validators.required]]
      });
    }
    getData(){
      this.locationService.get(this.data.selectedAnimal.id)
      .subscribe((data)=>{
        this.entitys = data;
      },
      (error)=>{
        this.toastr.error(error?.error?.message, 'Location');
      });
    }
    highlight(row: any){
      this.selectedRow = row;
      this.form.patchValue({
        startDate: row.startDate,
        endDate: row.endDate,
        locationId: row.locationId
      });
    }
    onNoClick() {
      this.dialogRef.close();
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

}
