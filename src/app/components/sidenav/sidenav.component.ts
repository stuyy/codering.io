import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/services/auth.service';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { routes, adminRoutes, linkRoutes, authorizedRoutes } from '../../routes';
import { flatMap, takeUntil } from 'rxjs/operators';
import { User } from 'src/app/models/User';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('side', { static: false }) sidenav : MatSidenav;
  public isAuthorized: boolean = false;
  public currentRoute: string = '';
  public routes = routes;
  public adminRoutes = adminRoutes;
  public linkRoutes = linkRoutes;
  public authorizedRoutes = authorizedRoutes;
  public loading = false;
  public user: User;
  public destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private sidenavService: SidenavService,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.auth.getAuth()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: User) =>
        (this.user = user),
        (err) => console.log(err),
        () => console.log('Completed.'));
    
    this.router.events
      .pipe(takeUntil(this.destroy$))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) this.currentRoute = event.url.slice(1);
      }, (err) => console.log(err), () => console.log('Completed.'));
  }
  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
  close() {
    this.sidenavService.toggle();
  }
  loginGitHub(): void {
    window.location.href = environment.github;
  }
  logout(): void {
    
  }

  toggleSidenav(): void {
    this.sidenavService.close();
  }
}
