import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
   
  }

  toggleSidenav(): void {
    this.sidenavService.toggle();
  }
}
