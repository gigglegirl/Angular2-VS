import { Component ,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEmployee } from './employeeInterface'
import { DataService } from './data.service';
import { retry , retryWhen , delay ,take, concatMap} from 'rxjs/operators';

@Component({
    selector: 'my-employee',
    templateUrl: 'employee.component.html',
    styleUrls : ['employee.component.less']
})

export class EmployeeComponent implements OnInit{

    employeeList :IEmployee[];
    employeeCountSelectedRadioButton :String = 'all';

    constructor(private _employeeService:DataService) {}
    ngOnInit(){
         this._employeeService.getEmployees().pipe( retryWhen( errors => errors.pipe(delay(5000) ,take(2) )) )
         .subscribe((employeeData) => {
             this.employeeList = employeeData;
         }); 
    }
    getTotalEmployeeCount():number{
        if(this.employeeList){
        return this.employeeList.length;
        }
    }

    getTotalMaleEmployeeCount():number{
        if(this.employeeList){
         return this.employeeList.filter(e => e.gender==='male').length 
        }
    }
    getTotalFemaleEmployeeCount():number{
        if(this.employeeList){
        return this.employeeList.filter(e => e.gender==='female').length 
        }
    }
    
    onEmployeeCountRadioSelectedChange(selectedValue:String):void{
      this.employeeCountSelectedRadioButton = selectedValue;
    }


}
