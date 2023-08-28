import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { UserCreateComponent } from './Pages/user-create/user-create.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    NavbarComponent,
    UserCreateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Imported to use ngModel in user-create 
    HttpClientModule // import httpclientmodule to do http calls.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
