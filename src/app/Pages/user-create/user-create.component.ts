import { Component } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

    name!: string
    username!: string
    email!: string
    address!: string

    // Function, so when you submit the form you should get all the details.
    saveUser(){

      var inputData = {
        name: this.name,
        username: this.username,
        email: this.email,
        address: this.address
      }
    }
}
