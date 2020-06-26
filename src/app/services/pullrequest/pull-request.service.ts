import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PullRequest } from 'src/app/models/PullRequest';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PullRequestService {

  constructor(private http: HttpClient) { }

  
}
