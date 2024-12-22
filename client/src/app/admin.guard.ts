import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Lấy thông tin email và username từ localStorage
    const email = localStorage.getItem('email');
    const username = localStorage.getItem('username');

    // Kiểm tra email và username của admin
    const isAdmin = email === 'kimphu098@gmail.com' && username === 'kimphu098'; // Kiểm tra quyền admin

    if (isAdmin) {
      return true; // Cho phép truy cập nếu là admin
    } else {
      alert('Bạn không có quyền truy cập vào trang này!');
      this.router.navigate(['/login']); // Điều hướng về trang login nếu không phải admin
      return false; // Không cho phép truy cập
    }
  }
}

