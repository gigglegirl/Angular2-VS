import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewHiresComponent } from './new-Hires/new-hires.component';
import { HrRoutingModule } from './hr.routing';
@NgModule({
  declarations: [NewHiresComponent],
  imports: [
    CommonModule,
    HrRoutingModule
  ]
})
export class HrModule { }
