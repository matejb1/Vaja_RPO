import { Routes } from '@angular/router';
import { EcommerceComponent } from './pages/dashboard/ecommerce/ecommerce.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BlankComponent } from './pages/blank/blank.component';
import { NotFoundComponent } from './pages/other-page/not-found/not-found.component';
import { AppLayoutComponent } from './layout/shell/app-layout/app-layout.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

export const routes: Routes = [
  {
    path:'',
    component:AppLayoutComponent,
    children:[
      {
        path: '',
        component: EcommerceComponent,
        pathMatch: 'full',
      },
      {
        path:'calendar',
        component:CalendarComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'blank',
        component:BlankComponent,
      },
    ]
  },
  // error pages
  {
    path:'**',
    component:NotFoundComponent,
  },
];
