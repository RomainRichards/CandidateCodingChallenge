import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent {

  constructor(private userService: UserService) {}


  ngOnInit(): void {
    this.onDeleteUser
  }

  onDeleteUser(): void {
    // Update the user data using this.user and the userService.
    this.userService.deleteUser(5).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Finished deleting user')
    );
  }
}
