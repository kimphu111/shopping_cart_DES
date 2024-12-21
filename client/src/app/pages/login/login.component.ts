import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import axios,{RawAxiosRequestHeaders } from 'axios';

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
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}


  onLogin() {
    console.log('Email:', this.email); // Kiểm tra xem email có giá trị không
    console.log('Password:', this.password); // Kiểm tra xem password có giá trị không
    const payloadOption : any = {
      email: this.email,
      password: this.password

    }
    axios.post('http://localhost:8000/api/users/login',payloadOption,{
      headers: {
        'Content-Type': 'application/json',
        'application': 'application/json',
      } as RawAxiosRequestHeaders
      ,withCredentials: true
    })
      .then((res) => res.data)
      .then((data) => {
        alert("Đăng nhập thành công");
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken); // Lưu token vào localStorage
        localStorage.setItem('username', data.username); // Lưu username vào localStorage
        this.router.navigate(['/']); // Điều hướng về trang chủ
      })
      .catch(() => alert("Đăng nhập thất bại"));
  }


//   generateToken(): string {
//     const randomString = Math.random().toString(36).substring(2, 15); // Chuỗi ngẫu nhiên
//     const token = CryptoJS.MD5(randomString).toString(); // Mã hóa bằng MD5 (hoặc các thuật toán khác như SHA256)
//     return token;
//   }
//
// // Hàm logout để xóa token và điều hướng lại trang login
//   logout() {
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('role');
//     alert('Session expired. Please log in again.');
//     this.router.navigate(['/login']);
//   }

}
