import { Component } from '@angular/core';
import { checkNoChanges } from '@angular/core/src/render3/instructions';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'my-employee',
    templateUrl: 'employee.component.html',
    styleUrls : ['employee.component.less']
})

export class EmployeeComponent {
    fullname: string = "Laxmi";
    employeeList : any
    employeeCountSelectedRadioButton :String = 'all';

    constructor() {
        this.employeeList =
        [{ Name: "laxmi", age: "28", height: '160cm' ,gender : 'female'},
        { Name: "Ashish", age: "30", height: "170cm" ,gender : 'male'},
        { Name: "Anmol", age: "22", height: "165cm",gender : 'male' },
        { Name: "Kamta", age: "58", height: "168cm" ,gender : 'male'}]
    }
    
    getTotalEmployeeCount():number{
        return this.employeeList.length
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
