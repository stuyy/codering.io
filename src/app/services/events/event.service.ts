import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubEvent } from 'src/app/models/Event';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  public createEvent(event: GithubEvent): Observable<GithubEvent> {
    return this.http.post<GithubEvent>(`${environment.host}/events`, event, { withCredentials: true });
  }

  public getEvents(): Observable<GithubEvent[]> {
    return this.http.get<GithubEvent[]>(`${environment.host}/events`, { withCredentials: true });
  }

}
