import { Component, OnInit } from '@angular/core';
import { NgForm, RequiredValidator } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms'
import { DataService } from '../data.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.less']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private _dataService : DataService) { }

  ngOnInit() {
     this.employeeForm = new FormGroup({
       first_name : new FormControl(),
       email : new FormControl(),
       pan_no : new FormControl(),
       mobile : new FormControl(),
       last_name : new FormControl(),
       gender : new FormControl()

     })
  }

  onSubmit():void{
    console.log(this.employeeForm.value);
    this._dataService.postEmployees(this.employeeForm.value).subscribe((sucess) => {
      console.log(sucess);
    },
    (error) => {
      console.log(error);
    });
  }

  //for trmplate driven forms
  /* saveEmployee(empForm : NgForm) :void {
     console.log(empForm.value)
  } */

}
