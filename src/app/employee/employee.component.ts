import { Component ,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { interfaceEmployee } from './employeeInterface'
import { EmployeeService } from './employee.service'

@Component({
    selector: 'my-employee',
    templateUrl: 'employee.component.html',
    styleUrls : ['employee.component.less'],
    providers:[EmployeeService]
})

export class EmployeeComponent implements OnInit{

    employeeList : interfaceEmployee;
    employeeCountSelectedRadioButton :String = 'all';

    constructor(private _employeeService:EmployeeService) {
        
    }
    ngOnInit(){
        this.employeeList= this._employeeService.getEmployees();
    }
    getTotalEmployeeCount(){
        return this.employeeList.length;
    }

    getTotalMaleEmployeeCount():number{
        return this.employeeList.filter(e => e.gender==='male').length
    }
    getTotalFemaleEmployeeCount():number{
        return this.employeeList.filter(e => e.gender==='female').length
    }
    
    onEmployeeCountRadioSelectedChange(selectedValue:String):void{
      this.employeeCountSelectedRadioButton = selectedValue;
    }

    onSubmit(form:NgForm) {
        alert("my form value  " + form);
    }
}
