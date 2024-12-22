import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import CryptoJS from 'crypto-js';
import { UserService } from '../../../service/user/user.service';
import { User } from '../../models/user.model';
import axios,{RawAxiosRequestHeaders } from 'axios';
import { FormsModule } from '@angular/forms';
import axios, { RawAxiosRequestHeaders } from 'axios';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  users: User[] = [];
  isLoading: boolean = false;

  constructor(private router: Router,
              private userService: UserService,
  ) {}

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    const payloadOption: any = {
      email: this.email,
      password: this.password
    };
    this.isLoading = true;

    setTimeout(() => {

      axios.post('http://localhost:8000/api/users/login', payloadOption, {
        headers: {
          'Content-Type': 'application/json',
          'application': 'application/json',
        } as RawAxiosRequestHeaders,
        withCredentials: true
      })
        .then((res) => res.data)
        .then((data) => {
          this.isLoading = false;
          console.log(data);

          localStorage.setItem('accessToken', data.accessToken);

          const decodedToken = this.decodeJwt(data.accessToken);
          if (decodedToken) {
            this.username = decodedToken.user?.username;
            localStorage.setItem('username', this.username);
          }

          this.router.navigate(['/']);
        })
        .catch((error) => {
          this.isLoading = false;
          console.error(error);
          alert("Đăng nhập thất bại");

          window.location.reload();
        });
    }, 3500);
  }

  decodeJwt(token: string) {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        throw new Error('Invalid token format');
      }

      const payload = parts[1]; // Phần payload ở vị trí thứ 1
      const decodedPayload = atob(payload); // Giải mã base64

      return JSON.parse(decodedPayload); // Trả về đối tượng JSON
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}
