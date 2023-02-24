import { Routes } from '@angular/router';
// import { AuthGuard } from "../../core/guards/auth.guard";


export const LayoutRoutes: Routes = [

  {
    path: 'dashboard',
    // canActivate:([AuthGuard]),
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'traffic-control',
    // canActivate:([AuthGuard]),
    loadChildren: () => import('../traffic-control/traffic-control.module').then(m => m.TrafficControlModule)
  },
  {
    path: 'click-log',
    // canActivate:([AuthGuard]),
    loadChildren: () => import('../click-log/click-log.module').then(m => m.ClickLogModule)
  },

  {
    path: 'set-up',
    // canActivate:([AuthGuard]),
    loadChildren: () => import('../set-up/set-up.module').then(m => m.SetUpModule)
  },
  {
    path: 'billing',
    // canActivate:([AuthGuard]),
    loadChildren: () => import('../billing/billing.module').then(m => m.BillingModule)
  },

];
