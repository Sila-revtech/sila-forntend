import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// routing modules
import { NavigationRoutingModule } from "./navigation-routing.module";


// angular material components
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

// pages components
import { NavigationComponent } from "./navigation/navigation.component";
import {BillingComponent} from "../pages/billing/billing/billing.component";
import {SetUpComponent} from "../pages/set-up/set-up/set-up.component";
import {DashboardComponent} from "../pages/dashboard/dashboard/dashboard.component";
import {TrafficControlComponent} from "../pages/traffic-control/traffic-control/traffic-control.component";
import {ClickLogComponent} from "../pages/click-log/click-log/click-log.component";
import {BillingRoutingModule} from "../pages/billing/billing-routing.module";
import {SetUpRoutingModule} from "../pages/set-up/set-up-routing.module";
import {DashboardRoutingModule} from "../pages/dashboard/dashboard-routing.module";
import {TrafficControlRoutingModule} from "../pages/traffic-control/traffic-control-routing.module";
import {ClickLogRoutingModule} from "../pages/click-log/click-log-routing.module";





@NgModule({
    declarations: [
      NavigationComponent,
      BillingComponent,
      SetUpComponent,
      DashboardComponent,
      TrafficControlComponent,
      ClickLogComponent
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

    // component modules
    NavigationRoutingModule,


    //material imports
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,

  ]
})
export class NavigationModule { }
