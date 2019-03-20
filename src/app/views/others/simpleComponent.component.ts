import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
    selector:'simple-component',
    templateUrl: 'simpleComponent.component.html'
})

export class simpleComponent implements OnChanges,OnInit{
   @Input() simpleInput:string
  constructor(){
     // alert("constructor");
  }
   ngOnChanges(changes : SimpleChanges){
       //alert("inside on change");
    for( let propertyName in changes){
        let change = changes[propertyName];
        let current = JSON.stringify(change.currentValue);
        let previous = JSON.stringify(change.previousValue);
        console.log("current value is"+current+"Previous value was"+previous);
     }
 }
 ngOnInit(){
     //alert("inside on init");
 }
}
