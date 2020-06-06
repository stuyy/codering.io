import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { Subscription, fromEvent, Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';
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
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

  public loading: boolean = true;
  public user: User;
  public query: FormControl;
  private auth$: Subscription;
  public showProgressBar = false;
  public cachedUsers: User[] = [];
  public hamburgerMenuClicked: boolean = true;
  
  constructor(
    private userService: UserService,
    private router: Router,
    private guard: AuthGuard,
    private sidenav: SidenavService) {
      this.query = new FormControl('');
    }

  ngOnInit(): void {
    
    const overlay = document.getElementById('overlay');
    this.hamburgerMenuClicked = false;
    this.auth$ = this.guard.authed.asObservable().subscribe((user) => {
      setTimeout(() => {
        this.loading = false;
        this.user = user;
      }, 300)
    }, (err) => {
      this.loading = false;
      this.router.navigate(['/']);
    });

    this.sidenav.sidenavEvents.subscribe((opened: boolean) => {
      if (opened) {
        this.hamburgerMenuClicked = true;
        overlay.style.display = 'block';
      } else {
        this.hamburgerMenuClicked = false;
        overlay.style.display = 'none';
      }
    });
    
    fromEvent(overlay, 'click')
      .subscribe((event) => {
        console.log(event);
        this.sidenav.close();
      });
  }

  search() {
    const { value } = this.query;
    this.showProgressBar = true;
    this.query.disable();
    this.userService.getUser(value)
      .subscribe((user: User) => {
        this.searchAndUpdateCache(user);
        setTimeout(() => {
          this.showProgressBar = false;
          this.query.enable();
        }, 500)
      }, (err) => {
        console.log(err);
        setTimeout(() => {
          this.showProgressBar = false;
          this.query.enable();
        }, 500)
      });
  }

  private searchAndUpdateCache(user: User): void {
    const cached = this.cachedUsers.some((u: User) => u.username === user.username);
    if (!cached) {
      if (this.cachedUsers.length === 5) {
        this.cachedUsers.shift();
        this.cachedUsers.push(user);
      } else this.cachedUsers.push(user);
    }
  }

  ngAfterViewInit(): void {
    
  }
  
  ngOnDestroy(): void {
    this.auth$.unsubscribe();
    console.log('Unsubscribed');
  }

  createOverlayObservable() {
    
  }
}
