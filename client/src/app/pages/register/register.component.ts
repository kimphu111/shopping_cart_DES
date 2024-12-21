import { Component } from '@angular/core';
import axios,{RawAxiosRequestHeaders } from 'axios';
import {FormsModule} from '@angular/forms';
import { Router} from '@angular/router';
import {NgIf} from '@angular/common';
import {LoginComponent} from '../login/login.component';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    FormsModule,
    NgIf
  ]
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  errorMessage: string | null = null;

  // Các lỗi hiển thị
  usernameError: string | null = null;
  emailError: string | null = null;
  passwordError: string | null = null;

  // Kiểm soát hiển thị lỗi
  showUsernameError: boolean = false;
  showEmailError: boolean = false;
  showPasswordError: boolean = false;

  constructor(private router: Router) {}

  // Kiểm tra Username
  checkUsername() {
    this.showUsernameError = true;
    if (!this.username) {
      this.usernameError = 'Username is required.';
    } else if (this.username.length < 2 || this.username.length > 20) {
      this.usernameError = 'Username must be between 2 and 20 characters.';
    } else {
      this.usernameError = null;
    }
  }

  // Kiểm tra Email
  checkEmail() {
    this.showEmailError = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex kiểm tra định dạng email
    if (!this.email) {
      this.emailError = 'Email is required.';
    } else if (!emailRegex.test(this.email)) {
      this.emailError = 'Invalid email format.';
    } else {
      this.emailError = null;
    }
  }

  // Kiểm tra Password
  checkPassword() {
    this.showPasswordError = true;
    if (!this.password) {
      this.passwordError = 'Password is required.';
    } else if (this.password.length <= 8) {
      this.passwordError = 'Password must be at least 6 characters.';
    } else {
      this.passwordError = null;
    }
  }

  onRegister() {
    this.errorMessage = null; // Reset thông báo lỗi trước khi gửi yêu cầu
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    if (!this.username || !this.email || !this.password) {
      this.errorMessage = 'Vui lòng điền đầy đủ thông tin.';
      return;
    }

    const payloadOption: any = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    axios
      .post('http://localhost:8000/api/users/register', payloadOption, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((res) => {
        alert('Đăng ký thành công,Vui lòng đăng nhập lại');
        console.log(res.data);
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.error('Lỗi từ backend:', err.response?.data);

        if (err.response && err.response.data && err.response.data.sqlMessage) {
          const sqlMessage = err.response.data.sqlMessage;

          if (sqlMessage.includes("for key 'users.username'")) {
            this.errorMessage = 'Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.';
          } else if (sqlMessage.includes("for key 'users.email'")) {
            this.errorMessage = 'Email đã tồn tại. Vui lòng chọn email khác.';
          } else {
            this.errorMessage = 'Đăng ký thất bại. Vui lòng thử lại.';
          }
        } else {
          console.error('Lỗi không xác định:', err);
          this.errorMessage = 'Có lỗi xảy ra. Vui lòng thử lại sau.';
        }
      });
  }


}

