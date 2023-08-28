import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit{

  // Call user-service inside constructor.
  constructor(private userService: UserService) {}
  
  // User properties, takes user input and binds to the User interface properties. 
  // It is updated in the HTML console/Inspect. this Api don't update.
  user: User = {
    name: '',
    username: '',
    email: '',
    address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
            lat: '',
            lng: ''
        }
    },
    phone: '',
    website: '',
    company: {
        name: '',
        catchPhrase: '',
        bs: ''
    }
  }
  
  
  ngOnInit(): void {
    // Loads data for editing.
    this.loadUserDataForEditing();
  }


  // Function to load user data for editing.
  loadUserDataForEditing(): void {
    const userIdToEdit = 1; // Replace with the actual user ID.

    this.userService.getUserById(userIdToEdit).subscribe(
      (userData: User) => {
        // Populate the 'user' object with the retrieved user data.
        this.user = userData;
      },
      (error: any) => {
        console.error('Error fetching user data for editing:', error);
        // Handle the error, e.g., display an error message to the user.
      }
    );
  }

  onUpdateUser(): void {
    // Update the user data using this.user and the userService.
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Finished updating user')
    );
  }
}
