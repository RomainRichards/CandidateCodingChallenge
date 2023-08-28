import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  // Call user-service inside constructor.
  constructor(private userService: UserService) {}

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
  };

  
  ngOnInit(): void {}

  // 'Save' user data to api. doesn't actually update api server.
  onSaveUser(): void {
    this.userService._saveUser(this.user).subscribe(
      (response: any) => {
        console.log(response);
        // Reset the form fields after successful submission.
        this.user = {
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
        };
      },
      (error: any) => {
        console.log(error);
        // Handle the error, e.g., display an error message to the user.
      },
      () => console.log('Finished creating user')
    );
  } 

}

  
