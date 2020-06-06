import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  public sidenav: MatSidenav;
  public isOpen: boolean = false;

  constructor() { }

  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  open() {
    this.sidenav.open();
  }
  close() {
    this.sidenav.close();
  }
  toggle() {
    console.log('Toggling');
    this.sidenav.toggle();
    console.log(this.sidenav);
  }
}
