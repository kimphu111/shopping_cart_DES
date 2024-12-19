import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutesModule} from './app.routes';
import {HomeComponent} from './pages/home/home.component';
import {Album1_Component} from './pages/album-1/album-1.component';
import {Album2_Component} from './pages/album-2/album-2.component';
import {LoginComponent} from './pages/login/login.component';
import {DetailProductComponent} from './pages/detail-product/detail-product.component';
import { AdminUserComponent } from './pages/admin-page/admin-user/admin-user.component';
import { AdminBillingComponent } from './pages/admin-page/admin-billing/admin-billing.component';
import { AdminComponent } from './pages/admin-page/admin.component';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {environment} from '../enviroments/enviroment';
import {AngularFireModule} from '@angular/fire/compat';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutesModule,
    HomeComponent,
    Album1_Component,
    Album2_Component,
    LoginComponent,
    DetailProductComponent,
    AdminUserComponent,
    AdminBillingComponent,
    AdminComponent,
    AngularFirestoreModule,
    Album1_Component,
    Album2_Component,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {

}


