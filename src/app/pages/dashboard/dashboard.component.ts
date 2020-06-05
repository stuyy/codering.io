import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
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
  public query: FormControl;
  private auth$: Subscription;
  public showProgressBar = false;
  public cachedUsers: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private guard: AuthGuard) {
      this.query = new FormControl('');
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

  search() {
    const { value } = this.query;
    this.showProgressBar = true;
    this.query.disable();
    this.userService.getUser(value)
      .subscribe((user: User) => {
        console.log(user);
        this.showProgressBar = false;
        this.query.enable();
      }, (err) => {
        console.log(err);
        this.showProgressBar = false;
        this.query.enable();
      });
  }

  ngOnDestroy(): void {
    this.auth$.unsubscribe();
    console.log('Unsubscribed');
  }
}
