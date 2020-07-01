import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { fromEvent } from 'rxjs';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('fadeIn', style({
        opacity: '100%',
      })),
      state('fadeOut', style({
        opacity: '0%',
      })),
      transition('fadeIn <=> fadeOut', [
        animate('.5s ease-in-out')
      ])
    ])
  ]
})
export class LandingPageComponent implements OnInit {

  public displayImages: boolean = false;
  constructor() { }

  ngOnInit(): void {
    fromEvent(window, 'scroll')
      .subscribe((event) => {
        if (window.scrollY >= 300) {
          this.displayImages = true;
        } else if (window.scrollY < 250) {
          this.displayImages = false;
        }
      })
  }
  loginGitHub(): void {
    window.location.href = environment.github;
  }
}
