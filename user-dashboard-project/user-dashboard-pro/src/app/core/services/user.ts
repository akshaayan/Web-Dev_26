import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, delay } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { inject } from '@angular/core';

import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient)
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/users';

  // constructor() {}
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl).pipe(
      delay(500), // for demo visibility (loading state)
      catchError((error) => {
        console.error('Failed to fetch users', error);
        return throwError(() => new Error('Unable to load users. Please try again.'));
      })
    );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`).pipe(
      delay(400),
      catchError((error) => {
        console.error(`Failed to fetch user ${id}`, error);
        return throwError(() => new Error('Unable to load user details.'));
      })
    );
  }
}
