import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PullRequest } from 'src/app/models/PullRequest';
import { Repository } from 'src/app/models/Repository';
import { pluck } from 'rxjs/operators';
import { Organization } from 'src/app/models/Organization';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  public getPullRequests(): Observable<PullRequest[]> {
    return this.http.get<PullRequest[]>(`${environment.host}/github/pull-request`, { withCredentials: true });
  }
  public getAllPullRequests(): Observable<PullRequest[]> {
    return this.http.get<PullRequest[]>(`${environment.host}/github/pull-request/users/all`, { withCredentials: true });
  }

  public getLimitedPullRequests(skip: number): Observable<{ count: number, results: PullRequest[] }> {
    return this.http.get<{ count: number, results: PullRequest[] }>(`${environment.host}github/pull-request/users/all?count=${skip} `, { withCredentials: true });
  }

  public fetchGithubRepositories(username: string): Observable<Repository[]> {
    return this.http
      .get<Repository[]>(`https://api.github.com/search/repositories?q=user:${username}+sort:updated&per_page=100`)
      .pipe(pluck('items'));
  }

  public getPullRequestsByEventId(id: string): Observable<PullRequest[]> {
    return this.http.get<PullRequest[]>(`${environment.host}/events/${id}/pull-requests`);
  }

  public getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(`${environment.host}/github/organizations`, { withCredentials: true });
  }

  public getOrganizationRepositories(org: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${environment.host}/github/organizations/${org}/repositories`, { withCredentials: true });
  }
}
