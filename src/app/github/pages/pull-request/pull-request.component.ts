import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/Github/github.service';
import { PullRequest } from 'src/app/models/PullRequest';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pull-request',
  templateUrl: './pull-request.component.html',
  styleUrls: ['./pull-request.component.css']
})
export class PullRequestComponent implements OnInit {

  public pullRequests: Observable<PullRequest[]>

  constructor(private github: GithubService) { }

  ngOnInit(): void {
    // this.github.getPullRequests()
    //   .subscribe((pullRequests: PullRequest[]) => {
    //     this.pullRequests = pullRequests;
    //   }, (err) => console.log(err));
    this.pullRequests = this.github.getPullRequests();
  }

}
