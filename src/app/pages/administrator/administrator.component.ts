import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { User } from 'src/app/models/User';
import { MatDialog } from '@angular/material/dialog';
import { CreateEventDialogComponent } from 'src/app/components/dialogs/create-event-dialog/create-event-dialog.component';
import { CreateEventFormComponent } from 'src/app/components/forms/create-event-form/create-event-form.component';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, fromEvent } from 'rxjs';
import { fadeInOut } from 'src/app/animations/animations';
import { SocketService } from 'src/app/services/socket/socket.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css'],
  animations: [fadeInOut]
})
export class AdministratorComponent implements OnInit {

  public user: User;
  public hamburgerMenuClicked: boolean = true;
  public destroyed$: Subject<boolean> = new Subject<boolean>();
  public loading: boolean = true;

  constructor(
    private authGuard: AuthGuard,
    private sidenav: SidenavService,
    private socket: SocketService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    const overlay = document.getElementById('overlay4');
    this.authGuard.authed.asObservable()
      .subscribe((user: User) => {
        setTimeout(() => {
          this.loading = false;
          this.user = user;
          console.log(this.user);
        }, 300);
      });
  
    this.sidenav.sidenavEvents
      .pipe(takeUntil(this.destroyed$))
      .subscribe((opened: boolean) => {
        if (opened) overlay.style.display = 'block';
        else overlay.style.display = 'none';
      });
      
    fromEvent(overlay, 'click')
      .subscribe((event) => this.sidenav.close());
  }

  displayCreateEventDialog(): void {
    this.dialog.open(CreateEventDialogComponent, {
      data: { component: CreateEventFormComponent },
      
    })
  }
  sendMessage(): void {
    console.log('Yo');
    this.socket.sendMessage('Hello World');
  }
}
