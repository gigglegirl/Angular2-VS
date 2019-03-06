import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector:'simple-component',
    templateUrl: 'simpleComponent.component.html'
})

export class simpleComponent implements OnChanges{
   @Input() simpleInput:string

   ngOnChanges(changes : SimpleChanges){
    for( let propertyName in changes){
        let change = changes[propertyName];
        let current = JSON.stringify(change.currentValue);
        let previous = JSON.stringify(change.previousValue);
        console.log("current value is"+current+"Previous value was"+previous);
     }
 }
}
