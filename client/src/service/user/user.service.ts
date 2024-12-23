import { Injectable } from '@angular/core';
import { User } from '../../app/models/user.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private  http:HttpClient) {}
  // private users: User[] = [
  //   { id: 1, userName: 'admin', email: 'admin@localhost', password: 'admin', status: 'Unblock', role: 'Admin' },
  //   { id: 2, userName: 'user', email: 'user@localhost', password: 'user', status: 'Unblock', role: 'User' },
  //   { id: 3, userName: 'user1', email: 'user1@localhost', password: 'user1', status: 'Unblock', role: 'User' },
  //   { id: 4, userName: 'user2', email: 'user2@localhost' , password: 'user2', status: 'Unblock', role: 'User' },
  //   { id: 4, userName: 'user2', email: 'user2@localhost' , password: 'user2', status: 'Unblock', role: 'User' },
  //   { id: 4, userName: 'user2', email: 'user2@localhost' , password: 'user2', status: 'Unblock', role: 'User' },
  //   { id: 4, userName: 'user2', email: 'user2@localhost' , password: 'user2', status: 'Unblock', role: 'User' },
  // ];
  private apiUrl = 'http://localhost:8000/api/users';


  getUsers() {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Cập nhật trạng thái người dùng
  updateUserStatus(id: number, status: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, { status });
  }

}


