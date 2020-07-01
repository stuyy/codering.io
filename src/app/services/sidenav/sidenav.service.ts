import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  public sidenav: MatSidenav;
  public isOpen: boolean = false;
  public sidenavEvents: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  open() {
    this.sidenav.open();
    this.isOpen = true;
  }
  close() {
    this.sidenav.close();
    this.isOpen = false;
    this.sidenavEvents.next(this.isOpen);
  }
  toggle() {
    this.sidenav.toggle();
    if (this.isOpen) {
      this.isOpen = !this.isOpen;
      this.sidenavEvents.next(this.isOpen);
    } else {
      this.isOpen = !this.isOpen;
      this.sidenavEvents.next(this.isOpen);
    }
  }
}
