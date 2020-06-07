import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from 'src/app/models/Event';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  public createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${environment.host}/event`, event, { withCredentials: true });
  }
}
