import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { User } from 'src/app/models/User';
import { MatDialog } from '@angular/material/dialog';
import { CreateEventDialogComponent } from 'src/app/components/dialogs/create-event-dialog/create-event-dialog.component';
import { CreateEventFormComponent } from 'src/app/components/forms/create-event-form/create-event-form.component';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  public user: User;
  constructor(
    private authGuard: AuthGuard,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.authGuard.authed.asObservable()
      .subscribe((user: User) => {
        this.user = user;
        console.log(this.user);
      })
  }

  displayCreateEventDialog(): void {
    this.dialog.open(CreateEventDialogComponent, {
      data: { component: CreateEventFormComponent },
    })
  }
}
