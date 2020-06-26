import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  currentRoute: string;

  constructor(private sidenavService: SidenavService, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentRoute = route.url;
        if (route.urlAfterRedirects === '/')
          this.currentRoute = '/';
      }
    }, (err) => console.log(err))
  }

  toggleSidenav(): void {
    this.sidenavService.toggle();
  }
}
