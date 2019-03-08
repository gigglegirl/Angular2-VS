import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { employeeTitle} from './employee/employeeTitle.pipe';
import { employeeCountComponent } from './child-component/employee-count.component';
import { simpleComponent } from './others/simpleComponent.component'
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './home/homeComponent.component'

const appRoutes : Routes = [
  {path : 'home', component:homeComponent },
  {path : 'employee', component:EmployeeComponent },
  {path : "**" , component :homeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    employeeTitle,
    employeeCountComponent,
    simpleComponent,
    homeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
