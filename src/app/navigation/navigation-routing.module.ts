import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';


const routes: Routes = [{
  path: '',
  component: NavigationComponent,
  children: [{
    path: '',
    component: AdminDashboardComponent  
  }, {
    path: 'master',
    loadChildren: () => import('../master/master.module').then(m => m.MasterModule)
  }, {
    path: 'animals',
    loadChildren: () => import('../animals/animals.module').then(m => m.AnimalsModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
