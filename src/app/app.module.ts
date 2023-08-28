import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { UserCreateComponent } from './Pages/user-create/user-create.component';
import { UserAccountComponent } from './Pages/user-account/user-account.component';
import { UserEditComponent } from './Pages/user-edit/user-edit.component';
import { UserDeleteComponent } from './Pages/user-delete/user-delete.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    UserCreateComponent,
    UserAccountComponent,
    UserEditComponent,
    UserDeleteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Imported to use ngModel in user-create 
    HttpClientModule // Import httpclientmodule to do http calls.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
