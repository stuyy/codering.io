import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  authed: BehaviorSubject<User> = new BehaviorSubject(undefined);
  constructor(private router: Router, private auth: AuthService) {

  }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
      try {
        const user = await this.auth.getAuth().toPromise();
        if (user.roles.includes('ADMINISTRATOR')) {
          this.authed.next(user);
          return true;
        } throw new Error('Not an Administrator');
      } catch (err) {
        console.log(err);
        this.router.navigate(['/dashboard']);
        return false;
      }
  }
  
 
}
