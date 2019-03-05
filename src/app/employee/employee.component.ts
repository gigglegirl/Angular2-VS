import { Component } from '@angular/core';

@Component({
    selector:'my-employee',
    templateUrl: 'employee.component.html'
})

export class EmployeeComponent {
    firstName : string = 'Laxmi';
    lastName: string = 'Singh';
    age : number = 28;
    gender : String = 'female'
    constructor(){
        /* alert("employee component"); */
    }
}
