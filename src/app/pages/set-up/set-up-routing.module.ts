import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetUpComponent } from "./set-up/set-up.component";


const routes: Routes = [
  { path: 'set-up' , component : SetUpComponent} ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetUpRoutingModule { }
