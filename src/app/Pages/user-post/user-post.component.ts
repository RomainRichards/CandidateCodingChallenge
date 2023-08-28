import { Component } from '@angular/core'; 
import { UserService } from 'src/app/Services/user.service';

import { User } from 'src/app/interface/user';
import { Post } from 'src/app/interface/post';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent {

  constructor(private _userService: UserService) {
  }

  // store list of users, selected users from drop down and list of posts.
  lstUsers!:User[];
  UserSelected!:Number; // Selected user, id.
  lstPosts!:Post[];

  // Set list of users to variable lstUsers.
  ngOnInit() {
    this._userService.getUsers()
    .subscribe
    (
      data =>
      {
        this.lstUsers = data;
      }
    )
  }

  // Set list of users to variable lstUsers.
  onUserSelected(selectedUserId:any):void{
    this._userService.getPostsForSelectedUserByparameter(selectedUserId)
    .subscribe
    (
      data => 
      {
        this.lstPosts = data;
      }
    )
  }
}
