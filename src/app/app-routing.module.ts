import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './home/homeComponent.component';
import { EmployeeComponent } from './employee/employee-component/employee.component';
import { PageNotFoundComponent } from './others/pageNotFoundComponent.component';
import { CreateEmployeeComponent } from './employee/create-component/create-employee.component'
import { ViewDetailComponent } from './employee/view-detail-component/view-detail.component';


const appRoutes : Routes = [
  {path : 'home', component:homeComponent },
  {path : 'employee', component:EmployeeComponent },
  {path : 'employee/:pan_no', component:ViewDetailComponent },
  {path : 'create-employee' , component : CreateEmployeeComponent},
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
