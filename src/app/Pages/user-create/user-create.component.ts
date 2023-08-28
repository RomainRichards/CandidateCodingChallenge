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

  errors: any = [];

  // Function, so when you submit the form you should get all the details.
  saveUser(){

    var inputData = {
      name: this.name,
      username: this.username,
      email: this.email,
      address: this.address
    }

    this.userService.saveUser(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response')
        alert(res.message);
        this.name = '';
        this.username = '';
        this.email = '';
        this.name = '';
        this.address = '';
      },
      error: (err: any) => {
        this.errors = err.error.errors
        console.log(err.error.errors, 'errors')
      }
    });
  }
}
