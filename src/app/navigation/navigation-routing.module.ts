import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";

// pages components
import { BillingComponent } from "../pages/billing/billing/billing.component";
import { SetUpComponent } from "../pages/set-up/set-up/set-up.component";
import { DashboardComponent } from "../pages/dashboard/dashboard/dashboard.component";
import { TrafficControlComponent } from "../pages/traffic-control/traffic-control/traffic-control.component";
import { ClickLogComponent } from "../pages/click-log/click-log/click-log.component";



const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children:[
      {path: 'billing', component: BillingComponent},
      {path: 'set-up', component: SetUpComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'traffic-control', component: TrafficControlComponent},
      {path: 'click-log', component: ClickLogComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class NavigationRoutingModule { }
