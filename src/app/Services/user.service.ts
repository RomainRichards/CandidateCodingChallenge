import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Here will be all the Http calls.
export class UserService {

  // Call Http client inside constructor function.
  constructor(private httpClient: HttpClient) {}

  saveUser(inputData: object){

    // Use post method to save the data.
    return this.httpClient.post(`https://jsonplaceholder.typicode.com/users`, inputData);
  }
}
