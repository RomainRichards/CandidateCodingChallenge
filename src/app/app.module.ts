import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // import httpclientmodule to do http calls.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
