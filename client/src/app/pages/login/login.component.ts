import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AccountService } from '../../services/account.service';
import CryptoJS from 'crypto-js';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    FormsModule
  ],
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}
  onLogin() {
    // Danh sách tài khoản giả lập
    const userAccounts = [
      { username: 'admin', password: '1234', role: 'admin' },
      { username: 'user', password: '1234', role: 'user' }
    ];

    // Kiểm tra tài khoản đăng nhập
    const account = userAccounts.find(
      acc => acc.username === this.username && acc.password === this.password
    );

    if (account) {
      console.log('Login successful!', account);

      // Lưu token và role vào localStorage
      const accessToken = this.generateToken(); // Token giả lập
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('role', account.role);

      console.log('Token:', accessToken);
      console.log('Role:', account.role);

      // Điều hướng dựa trên vai trò
      if (account.role === 'admin') {
        this.router.navigate(['/admin']);
        console.log('Admin logged in. No auto logout.');
      } else if (account.role === 'user') {
        this.router.navigate(['/home']);
        console.log('User logged in. Token will expire in 30 seconds.');

        // Token user tự động hết hạn sau 30 giây
        setTimeout(() => {
          if (localStorage.getItem('role') === 'user') {
            this.logout(); // Gọi hàm logout
          }
        }, 30000); // 30 giây
      }
    } else {
      // Thông báo khi đăng nhập không thành công
      alert('Invalid username or password!');
    }
  }

  generateToken(): string {
    const randomString = Math.random().toString(36).substring(2, 15); // Chuỗi ngẫu nhiên
    const token = CryptoJS.MD5(randomString).toString(); // Mã hóa bằng MD5 (hoặc các thuật toán khác như SHA256)
    return token;
  }

// Hàm logout để xóa token và điều hướng lại trang login
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    alert('Session expired. Please log in again.');
    this.router.navigate(['/login']);
  }

}
