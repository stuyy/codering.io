import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  public user: User;
  constructor(private authGuard: AuthGuard) { }

  ngOnInit(): void {
    this.authGuard.authed.asObservable()
      .subscribe((user: User) => {
        this.user = user;
        console.log(this.user);
      })
  }

}
