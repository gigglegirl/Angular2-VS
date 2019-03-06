import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  pageHeader : String = 'Employee Details';
  userText : string = "Dummy Text"
  constructor(){
  /*   alert("app component"); */
  }
}
