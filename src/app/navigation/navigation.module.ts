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

// components
import { NavigationComponent } from "./navigation/navigation.component";



@NgModule({
    declarations: [
      NavigationComponent,
    ],
    exports: [
        NavigationComponent

    ],
  imports: [
    CommonModule,
    RouterModule,

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
