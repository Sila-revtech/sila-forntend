import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'billing',
    loadChildren:() => import('./billing/billing.module').then(m => m. BillingModule)
  },
  {
    path:'set-up',
    loadChildren:() => import('./set-up/set-up.module').then(m => m. SetUpModule)
  },
  {
    path:'dashboard',
    loadChildren:() => import('./dashboard/dashboard.module').then(m => m. DashboardModule)
  },
  {
    path:'traffic-control',
    loadChildren:() => import('./traffic-control/traffic-control.module').then(m => m. TrafficControlModule)
  },
  {
    path:'click-log',
    loadChildren:() => import('./click-log/click-log.module').then(m => m. ClickLogModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class pagesRoutingModule { }
