import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(nameOrId: string): Observable<User> {
    return this.http.get<User>(`${environment.host}/users/${nameOrId}`, { withCredentials: true });
  }
}
