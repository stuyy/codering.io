import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('open', style({
        opacity: '100%'
      })),
      state('closed', style({
        opacity: '0%'
      })),
      transition('closed => open', [
        animate('.5s ease-in-out')
      ]),
    ])
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {

  public loading: boolean = true;
  public user: User;
  private auth$: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private guard: AuthGuard) {
      
    }

  ngOnInit(): void {
    this.auth$ = this.guard.authed.asObservable().subscribe((user) => {
      setTimeout(() => {
        this.loading = false;
        this.user = user;
      }, 300)
    }, (err) => {
      this.loading = false;
      this.router.navigate(['/']);
    });
  }

  ngOnDestroy(): void {
    this.auth$.unsubscribe();
    console.log('Unsubscribed');
  }
}
