import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEmployee } from '../employee.Interface'
import { DataService } from '../data.service';
import { retry, retryWhen, delay, take, concatMap } from 'rxjs/operators';
import { List } from 'immutable';
import { addMe } from '../../../core/linkedList';
import { mergeClass } from '../../../core/mergeSort';

export interface Command {
    action: 'add' | 'delete';
    department: 'sales' | 'rnd';
}
interface Icustomer {
    fname: string;
    lname: string;
}
@Component({
    selector: 'my-employee',
    templateUrl: 'employee.component.html',
    styleUrls: ['employee.component.less']
})
export class EmployeeComponent implements OnInit {

    employeeList: IEmployee[];
    employeeCountSelectedRadioButton: String = 'all';
    namesimple: string = "ashisih";


    constructor(private _employeeService: DataService) {
      // alert("inside construtor")
    }


    ngOnInit() {
        this._employeeService.getEmployees().pipe(retryWhen(errors => errors.pipe(delay(5000), take(2))))
            .subscribe((employeeData) => {
                this.employeeList = employeeData;
            });
        let obj = {
            fname: "ashish",
            lname: "gupta"
        }
        //interface ,generic example
        var x = new addMe<string>();
        x.add("ashish");
        var y = new mergeClass();
        y.mergeSort([8, 5, 7, 4, 9, 3, 2, 1, 10, 6])
    }
    getTotalEmployeeCount(): number {
        if (this.employeeList) {
            return this.employeeList.length;
        }
    }

    getTotalMaleEmployeeCount(): number {
        if (this.employeeList) {
            return this.employeeList.filter(e => e.gender === 'male').length
        }
    }
    getTotalFemaleEmployeeCount(): number {
        if (this.employeeList) {
            return this.employeeList.filter(e => e.gender === 'female').length
        }
    }

    onEmployeeCountRadioSelectedChange(selectedValue: String): void {
        this.employeeCountSelectedRadioButton = selectedValue;
        this.genericFunc<number>(0);
    }

    genericFunc<T>(args: T): T {
        return args;
    }



}
