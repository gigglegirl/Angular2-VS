import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './views/employee/employee-component/employee.component';
import { employeeTitle} from './views/employee/employeeTitle.pipe';
import { employeeCountComponent } from './child-component/employee-count.component';
import { simpleComponent } from './views/others/simpleComponent.component'
import { homeComponent } from './views/home/homeComponent.component'
import { DataService } from './views/employee/data.service';
import { PageNotFoundComponent } from './views/others/pageNotFoundComponent.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEmployeeComponent } from './views/employee/create-component/create-employee.component';
import { ViewDetailComponent } from './views/employee/view-detail-component/view-detail.component'
import { NgLoopDirective } from './core/directive';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    employeeTitle,
    employeeCountComponent,
    homeComponent,
    PageNotFoundComponent,
    CreateEmployeeComponent,
    ViewDetailComponent,
    simpleComponent,
    NgLoopDirective
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
