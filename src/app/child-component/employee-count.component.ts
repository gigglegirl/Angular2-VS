import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { all } from 'q';

@Component({
    selector:'employee-count',
    templateUrl: 'employee-count.component.html',
    styleUrls : ['employee-count.component.less']
})
export class employeeCountComponent {
    @Input()
    all : number;

    @Input()
    male : number;

    @Input()
    female : number;

    employeeCountSelectedRadioButton : String = 'all';

    @Output()
    radioButtonSelectionChangingEvent : EventEmitter<String> = new EventEmitter<String>();
 



    getButtonSelectedValue():any{
        this.radioButtonSelectionChangingEvent.emit(this.employeeCountSelectedRadioButton);
        console.log(this.employeeCountSelectedRadioButton);
    }
}