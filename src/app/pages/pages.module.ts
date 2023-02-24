import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

// ------------------------------ pages modules
import { BillingRoutingModule } from "./billing/billing-routing.module";
import { SetUpRoutingModule } from "./set-up/set-up-routing.module";
import { TrafficControlRoutingModule } from "./traffic-control/traffic-control-routing.module";
import { ClickLogRoutingModule } from "./click-log/click-log-routing.module";
import { DashboardRoutingModule } from "./dashboard/dashboard-routing.module";


@NgModule({
  declarations: [
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    RouterModule,
    BillingRoutingModule,
    SetUpRoutingModule,
    DashboardRoutingModule,
    TrafficControlRoutingModule,
    ClickLogRoutingModule,

  ]
})
export class PagesModule { }
