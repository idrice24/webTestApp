import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webTestApp';
  location: Location;

  constructor(private router: Router){
  // window.location.href.replace('http', 'https');
  AOS.init();
  console.log('########> configured routes: ', this.router.config);
  }
}
