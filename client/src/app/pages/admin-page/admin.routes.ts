import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminBillingComponent } from './admin-billing/admin-billing.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import {AdminGuard} from '../../admin.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: '', redirectTo: 'user', pathMatch: 'full'},
      { path: 'billing', component: AdminBillingComponent, canActivate: [AdminGuard] },
      { path: 'user', component: AdminBillingComponent, canActivate: [AdminGuard] },

      // Add more child routes here
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Admin_Routes { }
