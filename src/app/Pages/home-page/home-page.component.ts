import { Component } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

// Loads the particlesJS to display on home page.
export class HomePageComponent {
  ngOnInit(): void {
    particlesJS.load('particles', 'assets/particles.json', () => {
      console.log('particles.js config loaded');
    })
  }
}
