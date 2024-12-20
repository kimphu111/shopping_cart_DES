import { Injectable } from '@angular/core';
import { User } from '../../app/models/user.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private users: User[] = [
    { id: 1, userName: 'admin', email: 'admin@localhost', password: 'admin', status: 'Unblock', role: 'Admin' },
    { id: 2, userName: 'user', email: 'user@localhost', password: 'user', status: 'Unblock', role: 'User' },
    
    // Add more users as needed
  ];

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  getUserById(id: number): Observable<User | undefined> {
    return of(this.users.find(user => user.id === id));
  }
  
}
