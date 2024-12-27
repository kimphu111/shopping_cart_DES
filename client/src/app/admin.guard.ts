import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const email = localStorage.getItem('email');
    const username = localStorage.getItem('username');

    const isAdmin = email === 'kimphu098@gmail.com' && username === 'kimphu098';



    if (isAdmin) {
      return true;
    } else {
      alert('Bạn không có quyền truy cập vào trang này!');
      this.router.navigate(['/login']);
      return false;
    }
  }
}

