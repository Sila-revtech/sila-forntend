import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrafficControlComponent } from "./traffic-control/traffic-control.component";

const routes: Routes = [
  { path: 'traffic-control' , component : TrafficControlComponent} ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrafficControlRoutingModule { }
