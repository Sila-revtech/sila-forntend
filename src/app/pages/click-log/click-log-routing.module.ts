import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickLogComponent } from "./click-log/click-log.component";


const routes: Routes = [
  { path: 'click-log' , component :ClickLogComponent } ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClickLogRoutingModule { }
