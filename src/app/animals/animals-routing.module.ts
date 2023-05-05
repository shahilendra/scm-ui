import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './animals.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';

const routes: Routes = [{
  path:'',
  component: AnimalsComponent
}, {
  path: 'add',
  component: AddAnimalComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
