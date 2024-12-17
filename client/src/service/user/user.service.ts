import { Injectable } from '@angular/core';
import { User } from '../../app/models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private users: User[] = [
    { id: 1, userName: 'John Doe', phone: '123456789', address: '1234 Main St', status: 'Block' },
    { id: 2, userName: 'Jane Smith', phone: '987654321', address: '5678 Elm St', status: 'Unblock' },
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
