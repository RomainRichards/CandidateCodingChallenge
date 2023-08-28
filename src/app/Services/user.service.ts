import { HttpClient, HttpParams } from '@angular/common/http';
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

  // Gets user post from post api.
  getPostsForSelectedUserByparameter(selectedUserId:string): Observable<any> 
  {
      let params1 = new HttpParams().set('userId',selectedUserId);
      return this.httpClient.get(`${this.apiUserUrl}/posts`, {params: params1});
  }
}
