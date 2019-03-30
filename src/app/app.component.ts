import { Component, ViewChild, TemplateRef, OnInit, ViewContainerRef, AfterViewInit, ElementRef } from '@angular/core';

const name = "ashish";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  styles:['[highlight] {color:green}']
})
export class AppComponent implements OnInit,AfterViewInit {
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
  
  @ViewChild('loading') loading: ElementRef;

  @ViewChild('laxmi') propLaxmi:TemplateRef<any>

  constructor(private container: ViewContainerRef) {
    let a = 12;
  }

  ngOnInit() {
   this.container.createEmbeddedView(this.propLaxmi);
  }

  add(v: any) {

    const arrOfObject = [
      { name: "ashish", value: "1234" },
      { name: "laxmi", value: "54333" },
      { name: "pranav", value: "366356" }
    ];
    arrOfObject[0].name = "ash1233";
    let a = 6;
    if(true){
      let  a = 5;
    }
    console.log(a);
    alert(v);
    for (let j = 0; j <= 4; j++) {
      let ankur = j;

    }
  }

  ngAfterViewInit(){
   this.loading.nativeElement.setAttribute("highlight","");
  }
}
