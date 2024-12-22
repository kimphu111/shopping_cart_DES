import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [FormsModule, NgIf],
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;
  isLoading: boolean = false;

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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
    } else if (this.password.length <= 4) {
      this.passwordError = 'Password must be at least 6 characters.';
    } else {
      this.passwordError = null;
    }
  }

  onRegister() {
    this.errorMessage = null; // Reset thông báo lỗi trước khi gửi yêu cầu
    if (!this.username || !this.email || !this.password) {
      this.errorMessage = 'Vui lòng điền đầy đủ thông tin.';
      return;
    }

    // Kiểm tra trùng tên đăng nhập hoặc email từ danh sách giả định (trong trường hợp thực tế, bạn có thể gọi API kiểm tra)
    const existingUsers = [
      { username: 'existingUser', email: 'existing@email.com' }, // Danh sách người dùng đã tồn tại (giả sử)
    ];

    // Kiểm tra nếu username hoặc email đã tồn tại trong danh sách
    const usernameExists = existingUsers.some(user => user.username === this.username);
    const emailExists = existingUsers.some(user => user.email === this.email);

    if (usernameExists) {
      this.errorMessage = 'Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.';
      return;  // Dừng việc gửi request và hiển thị lỗi
    }

    if (emailExists) {
      this.errorMessage = 'Email đã tồn tại. Vui lòng chọn email khác.';
      return;  // Dừng việc gửi request và hiển thị lỗi
    }

    this.isLoading = true; // Bật spinner khi bắt đầu gửi request

    const payloadOption: any = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    // Thực hiện yêu cầu đăng ký
    axios
      .post('http://localhost:8000/api/users/register', payloadOption, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then((res) => {
        alert('Đăng ký thành công, vui lòng đăng nhập lại');
        this.router.navigate(['/']);
      }).catch((err) => {
      console.error('Lỗi từ backend:', err.response?.data);

      setTimeout(() => {
        if (err.response && err.response.data && err.response.data.error) {
          this.errorMessage = err.response.data.error; // Lỗi từ backend (trùng username/email)
        } else {
          this.errorMessage = 'Đăng ký thất bại. Vui lòng thử lại.';
        }
      }, 5000); // 5 giây delay
    })
      .finally(() => {
        this.isLoading = false; // Tắt spinner sau khi có kết quả
      });
  }
}
