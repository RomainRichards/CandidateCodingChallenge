import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Address } from 'src/app/interface/address';
import { Company } from 'src/app/interface/company';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  // Call user-service inside constructor.
  constructor(private userService: UserService) {}

  private user:User ={
    'name': 'John Graham',
    'username': 'Leo',
    'email': 'Sincere@april.biz',
    'address': {
        'street': 'Kulas Light',
        'suite': 'Apt. 556',
        'city': 'Gwenborough',
        'zipcode': '92998-3874',
        'geo': {
            'lat': '-37.3159',
            'lng': '81.1496'
        }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
        'name': 'Romaguera-Crona',
        'catchPhrase': 'Multi-layered client-server neural-net',
        'bs': 'harness real-time e-markets'
    }
  }
  id!: number
  name!: string
  username!: string
  email!: string
  address!: Address
  phone!: string
  company!: Company
  website!: string

  // Create data 'on' Api. doesn't actually update api server.
  ngOnInit(): void {
    this._onsaveUser();
  }

  // Variables added from loader user-create.component.html
  isLoading: boolean = false;
  loadingTitle: string = 'Loading';


  // Function, so when you submit the form you should get all the details.
  _onsaveUser(): void {
    // When save btn is clicked, the loading icon is displayed (true).
    this.isLoading = true;
    this.loadingTitle = 'Saving';

    // var user= {
    //   id: this.id,
    //   name: this.name,
    //   username: this.username,
    //   email: this.email,
    //   address: this.address,
    //   phone: this.phone,
    //   company: this.company,
    //   website: this.website
    // }
    
    this.userService._saveUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Finished creating user')
      // Once it is a success, this loading will not display (false).
    );
    this.isLoading = false;
  } 

}

  
