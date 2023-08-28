import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})

// Here will be all the Http calls.
export class UserService {
 
  // Api base url.
  private apiUserUrl = `https://jsonplaceholder.typicode.com`;

  // Call Http client inside constructor function.
  constructor(private httpClient: HttpClient) {}

  // Return multiple users.
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUserUrl}/users`);
  }

  // Return one user.
  getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUserUrl}/users/1`);
  }

  _saveUser(user: User): Observable<User> {
    // Use method to save the data.
    return this.httpClient.post<User>(`${this.apiUserUrl}/users`, user);
  }

  // Add a method to fetch user data by ID.
  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.apiUserUrl}/users/${id}`)
  }

    // Use method to update the data. Pass in the id.
  updateUser(user: User): Observable<User> {
    return this.httpClient.patch<User>(`${this.apiUserUrl}/users/${user.id}`, user);
  }

    // Use method to update the data. Pass in the id.
    deleteUser(id: number): Observable<unknown> {
      return this.httpClient.delete<unknown>(`${this.apiUserUrl}/users/${id}`);
    }
}
