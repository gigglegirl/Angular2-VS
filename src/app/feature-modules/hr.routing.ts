import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewHiresComponent } from './new-Hires/new-hires.component';
const routes: Routes = [{
  path: '',
  component: NewHiresComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrRoutingModule { }