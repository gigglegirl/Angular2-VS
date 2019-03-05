import { Component } from '@angular/core';
import { checkNoChanges } from '@angular/core/src/render3/instructions';

@Component({
    selector: 'my-employee',
    templateUrl: 'employee.component.html'
})

export class EmployeeComponent {
    employeeList: any[] =
        [{ Name: "laxmi", age: "28", height: '160cm' },
        { Name: "Ashish", age: "30", height: "170cm" },
        { Name: "Anmol", age: "22", height: "165cm" },
        { Name: "Kamta", age: "58", height: "168cm" }]

    checkAge(name : string) {
       if(name === 'laxmi'){
           console.log("28")
          return "28"
       }
    } 
    
    fullname : string = "Laxmi";

    constructor() {
        /* alert("employee component"); */
    }

    onSubmit(form){
     alert("my form value  "+form);
    }
}
