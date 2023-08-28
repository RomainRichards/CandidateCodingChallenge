import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { UserAccountsComponent } from './Pages/user-accounts/user-accounts.component';

// Add routing for page navigation.
const routes: Routes = [
  {path:'', component: HomePageComponent, title: 'Home Page'},
  {path:'about-application', component: AboutPageComponent, title: 'About Application'},
  {path:'user-accounts', component: UserAccountsComponent, title: 'User Accounts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
