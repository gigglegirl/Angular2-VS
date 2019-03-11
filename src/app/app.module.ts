import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { employeeTitle} from './employee/employeeTitle.pipe';
import { employeeCountComponent } from './child-component/employee-count.component';
import { simpleComponent } from './others/simpleComponent.component'
import { homeComponent } from './home/homeComponent.component'
import { DataService } from './employee/data.service';
import { PageNotFoundComponent } from './others/pageNotFoundComponent.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ViewDetailComponent } from './employee/view-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    employeeTitle,
    employeeCountComponent,
    simpleComponent,
    homeComponent,
    PageNotFoundComponent,
    CreateEmployeeComponent,
    ViewDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
