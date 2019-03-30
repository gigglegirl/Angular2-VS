import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from './views/employee/data.service';
import { NgLoopDirective } from './core/directive';

describe('AppComponent', () => {
  let dataService :DataService;
  let comp:AppComponent;
  let fixture :ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NgLoopDirective
      ],
      providers:[]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
    });

    //dataService = TestBed.get(DataService);
  
  })
  );

  it('add function', async(() => {
    comp.add("ashish");
    
    comp.ngAfterViewInit();
    //expect(dataService).toBeTruthy();
    //const fixture = TestBed.createComponent(AppComponent);
    //const app = fixture.debugElement.componentInstance;
    //expect(app).toBeTruthy();
  }));
  it('init function call', async(() => {
    comp.ngOnInit();
  }))
});