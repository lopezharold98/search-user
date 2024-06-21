import { Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientSummaryComponent } from './client-summary/client-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: 'client-form', component: ClientFormComponent },
  { path: 'client-summary', component: ClientSummaryComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: '/client-form', pathMatch: 'full' }
];
