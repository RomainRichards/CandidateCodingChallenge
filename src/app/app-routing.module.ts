import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { UserCreateComponent } from './Pages/user-create/user-create.component';

// Add routing for page navigation.
const routes: Routes = [
  {path:'', component: HomePageComponent, title: 'Home Page'},
  {path:'about-application', component: AboutPageComponent, title: 'About Application'},
  {path:'user/create', component: UserCreateComponent, title: 'User Accounts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
