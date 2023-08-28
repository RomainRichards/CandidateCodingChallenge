import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  // Call user-service inside constructor.
  constructor(private userService: UserService) {}

  name!: string
  username!: string
  email!: string
  address!: string

  // Variables added from loader user-create.component.html
  isLoading: boolean = false;
  loadingTitle: string = 'Loading';

  errors: any = [];

  // Function, so when you submit the form you should get all the details.
  saveUser(){

    // When save btn is clicked, the loading icon is displayed (true).
    this.isLoading = true;
    this.loadingTitle = 'Saving';

    var inputData = {
      name: this.name,
      username: this.username,
      email: this.email,
      address: this.address
    }

    this.userService.saveUser(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');

        // Clears data after save button is clicked/ success.
        alert(res.message);
        this.name = '';
        this.username = '';
        this.email = '';
        this.address = '';

        // Once it is a success, this loading will not display (false).
        this.isLoading = false;

      },
      error: (err: any) => {
        this.errors = err.error.errors
        this.isLoading = false;
        console.log(err.error.errors, 'errors')
      }
    });
  }
}
