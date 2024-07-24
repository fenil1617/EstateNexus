import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, users } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authentication: boolean = true
  constructor() { }

  signup(): Observable<User[]> {
    return of(users)
  }

  getAll(): Observable<User[]> {
    return of(users)
  }

  logout() {
    this.authentication = false
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('id')
  }
}
