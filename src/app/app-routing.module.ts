import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { UserCreateComponent } from './Pages/user-create/user-create.component';
import { UserAccountComponent } from './Pages/user-account/user-account.component';
import { UserPostComponent } from './Pages/user-post/user-post.component';

// Add routing for page navigation.
const routes: Routes = [
  {path:'', component: HomePageComponent, title: 'Home Page'},
  {path:'user/create', component: UserCreateComponent, title: 'Create User'},
  {path:'users', component: UserAccountComponent, title: 'User Accounts'},
  {path:'user/posts', component: UserPostComponent, title: 'User Posts'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
