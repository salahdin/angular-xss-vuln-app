import { Routes } from '@angular/router';
import { XssTestComponent } from './xss-test/xss-test.component';

export const routes: Routes = [
  { path: 'xss-test', component: XssTestComponent },
  { path: '', redirectTo: '/xss-test', pathMatch: 'full' }
];
