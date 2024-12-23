import {Component, OnInit} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, RouterLink, RouterLinkActive ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{
  users: any[] = [];

  ngOnInit(): void {
    this.getUsers();  // Khi component khởi tạo, gọi API để lấy dữ liệu người dùng
  }

  getUsers() {
    axios.get('http://localhost:8000/api/users')
      .then(response => {
        this.users = response.data;  // Gán dữ liệu trả về vào mảng users
      })
      .catch(error => {
        console.error('Lỗi khi lấy dữ liệu người dùng:', error);
      });
  }
}
