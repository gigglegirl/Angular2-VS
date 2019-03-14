import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

class Node {
    data:string;
    next:any;
    constructor(data:string){
        this.data = data;
        this.next = null;

    }
}

// @Injectable({
//     providedIn:'root'
// })
export class LinkedList {
    head:any;
    length:number;
    constructor(){
        this.head = null;
        this.length  = 0;
    }

    add(data){
        const nodeToAdd = new Node(data);
        let nodeToCheck = this.head; //first node in the list check

        //if the head is null
        if(!nodeToCheck){
           this.head = nodeToAdd;
           this.length++;
           return nodeToAdd;
        }

        //loop until we find the end
        while(nodeToCheck.next){
            nodeToCheck = nodeToCheck.next;
        }

        // once were at the end of the list
        nodeToCheck.next = nodeToAdd;
        this.length++;
        return nodeToAdd;
    }

    addToHead(datatoHead){
        console.log(this.head);
        let nodeToCheck = this.head;
        if(!nodeToCheck){
            this.add(datatoHead);
        } else {
            const nodeToAddAtHead = new Node(datatoHead);
            let temp = this.head;
            this.head = nodeToAddAtHead;
            this.head.next = temp;
        }
    }

    get(num){
        let nodeToCheck = this.head;
        let count = 0;

        if(num > this.length) 
            return ;
        
        while(count < num){
           nodeToCheck = nodeToCheck.next;
           count++;
        }
       return nodeToCheck;
    }
}