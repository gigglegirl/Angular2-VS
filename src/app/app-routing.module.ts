import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './views/home/homeComponent.component';
import { EmployeeComponent } from './views/employee/employee-component/employee.component';
import { PageNotFoundComponent } from './views/others/pageNotFoundComponent.component';
import { CreateEmployeeComponent } from './views/employee/create-component/create-employee.component'
import { ViewDetailComponent } from './views/employee/view-detail-component/view-detail.component';


const appRoutes : Routes = [
  {path : 'home', component:homeComponent },
  {path : 'employee', component:EmployeeComponent },
  {path : 'employee/:pan_no', component:ViewDetailComponent },
  {path : 'create-employee' , component : CreateEmployeeComponent},
  {path : 'hr' , loadChildren : './views/feature-modules/hr.module#HrModule'},
  {path : '' , redirectTo:'home', pathMatch :'full'},
  {path : "**" , component :PageNotFoundComponent}
]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
