import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { LayoutRoutes } from "./layout-routing.module";

import { LayoutComponent } from './layout/layout.component';
import { NavigationModule } from "../../navigation/navigation.module";
import { BillingModule } from "../billing/billing.module";
import { ClickLogModule } from "../click-log/click-log.module";
import { DashboardModule } from "../dashboard/dashboard.module";
import { SetUpModule } from "../set-up/set-up.module";
import { TrafficControlModule } from "../traffic-control/traffic-control.module";



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    BillingModule,
    ClickLogModule,
    DashboardModule,
    SetUpModule,
    TrafficControlModule,
    LayoutRoutes,
    RouterModule.forChild(LayoutRoutes)
  ]
})
export class LayoutModule { }
