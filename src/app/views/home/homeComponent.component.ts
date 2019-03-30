import {Component} from '@angular/core';
import { LinkedList } from '../../core/linkedList'
@Component({
    selector : 'my-home',
    templateUrl : 'homeComponent.component.html',
    styleUrls:['./homeComponent.component.scss']
})
export class homeComponent {
name:any;
message:any;
myList:any;
newLinkInstance:LinkedList;
addtoheadprop:any;
valueToGet:string;
constructor(){ 
    this.newLinkInstance = new LinkedList();
}

add(data){
    let itemAdd = this.newLinkInstance.add(data.value);
     console.log(itemAdd);
     this.myList = this.newLinkInstance.head;
     this.name ='';
}

addToHeadFunc(number){
    let itemAddToHead = this.newLinkInstance.addToHead(+number);
    this.myList = this.newLinkInstance.head;
}

get(number){
   let getData =this.newLinkInstance.get(+number.value);
   this.message =getData.data;
   this.addtoheadprop = '';
}


}