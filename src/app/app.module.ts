import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { employeeTitle} from './employee/employeeTitle.pipe';
import { employeeCountComponent } from './child-component/employee-count.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    employeeTitle,
    employeeCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
