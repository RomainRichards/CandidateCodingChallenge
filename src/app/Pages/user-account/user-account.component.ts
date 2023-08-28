import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/interface/user';


@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(private userService: UserService) {}


  usersList: User[] = []; // Imported from user.services, array of data.

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
      (response: User[]) => {
        this.usersList = response; // Populate the usersList with the API response.
      },
      (error: any) => {
        console.error('Error fetching user list:', error);
        // Handle the error / display an error message to the user.
      },
      () => console.log('Finished getting users')
    );
  }

  // Return one user.
  _getUser(): void {
    this.userService.getUser().subscribe(
      () => {
        // Handle the single user response here, if needed.
      },
      (error: any) => {
        console.error('Error fetching user:', error);
        // Handle the error / display an error message to the user.
      },
      () => console.log('Finished getting user')
    );
  }
}

