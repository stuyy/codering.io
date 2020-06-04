import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
    host ::ng-deep app-user-profile { width: 50%; }`
  ]
})
export class DashboardComponent implements OnInit {

  public connected: boolean = false;
  public loading: boolean = true;
  public user: User;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.getAuth()
      .subscribe((user: User) => {
        this.loading = false;
        this.user = user;
        console.log(this.user);
        if (this.user.discordId) this.connected = true;
        console.log(this.connected);
      }, (err) => {
        this.loading = false;
        console.log(err);
        this.router.navigate(['/']);
      });
  }

  connectDiscord(): void {
    window.open(environment.discordRedirect)
  }

}
