import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUsersComponent } from './admin-user/admin-user.component';
import { AdminBillingComponent } from './admin-billing/admin-billing.component';
import {HttpClientModule} from '@angular/common/http';

import { AdminComponent } from './admin.component';
import { Admin_Routes } from './admin.routes';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    Admin_Routes,
    AdminBillingComponent,
    AdminUsersComponent,
    AdminComponent,
    HttpClientModule,
  ]
})
export class AdminModule { }
