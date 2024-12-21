import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {Album1_Component} from './pages/album-1/album-1.component';
import {Album2_Component} from './pages/album-2/album-2.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './pages/login/login.component';
import {DetailProductComponent} from './pages/detail-product/detail-product.component';
import {RegisterComponent} from './pages/register/register.component';
import {AdminGuard} from './admin.guard';
import {AdminBillingComponent} from './pages/admin-page/admin-billing/admin-billing.component';


export const routes: Routes = [
  { path :'',component: HomeComponent},
  { path :'album1', component : Album1_Component},
  { path :'album2', component : Album2_Component},
  { path :'login',component: LoginComponent},
  { path :'detail',component: DetailProductComponent},
  { path :'detail/:id', component: DetailProductComponent},
  { path :'register',component: RegisterComponent},

  { path :'admin', loadChildren: () => import('./pages/admin-page/admin.module').then(m => m.AdminModule)},
  { path: 'billing', component: AdminBillingComponent, canActivate: [AdminGuard] },
  { path: 'user', component: AdminBillingComponent, canActivate: [AdminGuard] },


  { path : '**', redirectTo: '',pathMatch:'full' } // quay ve khi k tim thay trang

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Tự động cuộn lên đầu khi điều hướng
    }),
  ],
  exports: [RouterModule],
})

export  class  AppRoutesModule { }





