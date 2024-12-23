import {Component, OnInit} from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../../../service/user/user.service';
import { User } from '../../../models/user.model';
import { NgFor, NgIf } from '@angular/common';
import axios, { RawAxiosRequestHeaders } from 'axios';
import {response} from 'express';


@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf, NgFor],
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.scss'
})
export class AdminUsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  toggleStatus(user: any) {
    const newStatus = user.status === 'active' ? 'blocked' : 'active';

    // Gọi API để cập nhật trạng thái trên server
    this.userService.updateUserStatus(user.id, newStatus).subscribe({
      next: (response) => {
        // Sau khi cập nhật thành công, thay đổi trạng thái hiển thị
        user.status = newStatus;
      },
      error: (err) => {
        console.error('Error updating user status:', err);
      },
    });
  }
}
