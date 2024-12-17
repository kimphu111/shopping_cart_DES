import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../../../service/user/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.scss'
})
export class AdminUserComponent {

  users: User[] = [];

  constructor(private userService: UserService) {}
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {this.users = users});
  }
}
