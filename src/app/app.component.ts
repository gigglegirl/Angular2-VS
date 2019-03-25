import { Component, ViewChild, TemplateRef, OnInit, ViewContainerRef } from '@angular/core';

const name = "ashish";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title:"hello m here"
  pageHeader: String = 'Employee Details';
  userText: string = "Dummy Text"
  ab = true;
  view = [1, 4, 5, 6, 7]
  arrOfObject = [
    { name: "ashish", value: "1234" },
    { name: "laxmi", value: "54333" },
    { name: "pranav", value: "366356" }
  ];
  @ViewChild('loading') loading: TemplateRef<any>;

  constructor(private container: ViewContainerRef) {
    let a = 12;
  }

  ngOnInit() {
    this.container.createEmbeddedView(this.loading);
  }

  add(v: any) {
    alert(v);
    for (let j = 0; j <= 4; j++) {
      let ankur = j;

    }
  }
}
