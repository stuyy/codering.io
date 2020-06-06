import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/services/auth.service';
import { fromEvent } from 'rxjs';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild('side', { static: false }) sidenav : MatSidenav;
  public isAuthorized: boolean = false;
  public currentPath: string;
  constructor(private sidenavService: SidenavService, private auth: AuthService) { }
  ngOnInit() {
    // fromEvent(window, 'resize')
    //   .pipe(pluck('target', 'outerWidth'))
    //   .subscribe((width) => {
    //     if (width >= 850 && this.sidenavService.isOpen)
    //       this.sidenavService.close();
    //   });
  }
  ngAfterViewInit() {
    console.log("Sidenav was injected.")
    this.sidenavService.setSidenav(this.sidenav);
  }
  closeSidenav() {
    this.sidenavService.close();
  }

}
