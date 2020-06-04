import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PullRequest } from 'src/app/models/PullRequest';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  public getPullRequests(): Observable<PullRequest[]> {
    return this.http.get<PullRequest[]>(`${environment.host}/github/pull-request`, { withCredentials: true });
  }
}
