import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/User';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  authed: BehaviorSubject<User> = new BehaviorSubject(undefined);
  constructor(
    private auth: AuthService,
    private router: Router) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    try {
      const user = await this.auth.getAuth().toPromise();
      this.authed.next(user);
      return true;
    } catch (err) {
      console.log(err);
      this.router.navigate(['/']);
      return false;
    }
  }
}
