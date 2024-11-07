import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutesModule } from './app.routes';
import { AppComponent } from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {Album1_Component} from './pages/album-1/album-1.component';
import {Album2_Component} from './pages/album-2/album-2.component';
import {LoginComponent} from './pages/login/login.component';
import {DetailProductComponent} from './pages/detail-product/detail-product.component';


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    AppComponent,
    HomeComponent,
    Album1_Component,
    Album2_Component,
    LoginComponent,
    DetailProductComponent
  ],
  providers: [],
})
export class AppModule { }
