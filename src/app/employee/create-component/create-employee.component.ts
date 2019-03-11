import { Component, OnInit } from '@angular/core';
import { NgForm, RequiredValidator } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms'


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.less']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor() { }

  ngOnInit() {
     this.employeeForm = new FormGroup({
       first_name : new FormControl(),
       email : new FormControl()

     })
  }

  onSubmit():void{
    console.log(this.employeeForm.value)
  }

  //for trmplate driven forms
  /* saveEmployee(empForm : NgForm) :void {
     console.log(empForm.value)
  } */

}
