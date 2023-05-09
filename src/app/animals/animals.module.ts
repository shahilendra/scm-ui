import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { AddNotesComponent } from './add-notes/add-notes.component';
import {MatDialogModule} from '@angular/material/dialog';
import { InseminationComponent } from './insemination/insemination.component';
import { AddInseminationComponent } from './add-insemination/add-insemination.component';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
import { LactationComponent } from './lactation/lactation.component';
import { AnimalWeightComponent } from './animal-weight/animal-weight.component';
import { BodyScoreComponent } from './body-score/body-score.component';
import { LocationComponent } from './location/location.component';
import { MilkYieldComponent } from './milk-yield/milk-yield.component';
import { AnimalGroupComponent } from './animal-group/animal-group.component';
import { AnimalVaccinationComponent } from './animal-vaccination/animal-vaccination.component';
import { AnimalExaminationComponent } from './animal-examination/animal-examination.component';
import { AnimalBreedingComponent } from './animal-breeding/animal-breeding.component';
import { AnimalPregnancyComponent } from './animal-pregnancy/animal-pregnancy.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AnimalsComponent,
    AddAnimalComponent,
    AddNotesComponent,
    InseminationComponent,
    AddInseminationComponent,
    LactationComponent,
    AnimalWeightComponent,
    BodyScoreComponent,
    LocationComponent,
    MilkYieldComponent,
    AnimalGroupComponent,
    AnimalVaccinationComponent,
    AnimalExaminationComponent,
    AnimalBreedingComponent,
    AnimalPregnancyComponent,
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    NgxMatTimepickerModule,
    MatIconModule
  ],
  entryComponents: [
    AddNotesComponent,
    InseminationComponent,
    LactationComponent,
    BodyScoreComponent,
    AnimalVaccinationComponent,
    AnimalExaminationComponent
  ]
})
export class AnimalsModule { }
