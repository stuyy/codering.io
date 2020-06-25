import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  navigate(anchor: string) {
    const element = document.getElementById(anchor);
    console.log(element);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  loginGitHub(): void {
    window.location.href = environment.github;
  }
}
