import { Injectable } from '@angular/core';
import { interfaceEmployee } from './employeeInterface'

@Injectable()
export class EmployeeService {
   getEmployees(): any {
    return [
        { Name: "laxmi", age: "28", height: '160cm' ,gender : 'female'},
        { Name: "Ashish", age: "30", height: "170cm" ,gender : 'male'},
        { Name: "Anmol", age: "22", height: "165cm",gender : 'male' },
        { Name: "Kamta", age: "58", height: "168cm" ,gender : 'male'}
    ];
       
   }
}