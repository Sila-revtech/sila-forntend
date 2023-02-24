import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  private _router: Subscription | undefined;


  constructor( public location: Location, private router: Router) {}

  ngOnInit() {
    console.log(this.router)

    const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
    const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
  }
}


