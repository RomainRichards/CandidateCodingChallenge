import { Component, OnInit } from '@angular/core';
import { UserService, UserResponse } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(private userService: UserService) {}

  users!: UserResponse[]; // Imported from user.services, array of data.

  // Get data from Api.
  // when page loads it calls the ngOnInIt function, 
  // then getUserLists function, then getUserLists function calls the http client.
  ngOnInit(): void {
    this._getUserLists(); 
    this._getUser();
  }

  // Call Http client inside the function, through userService.
  // Subscribe and get the response.
  // Return multiple users. 
  _getUserLists(): void {
    this.userService.getUsers().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Finished getting users')
    );
  } 

  // Return one user.
  _getUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Finished getting user')
    );
  } 
}
