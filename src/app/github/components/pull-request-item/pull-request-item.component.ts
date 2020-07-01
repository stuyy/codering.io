import { Component, OnInit, Input } from '@angular/core';
import { PullRequest, PullRequestUserData, Repository, PullRequestData } from 'src/app/models/PullRequest';

@Component({
  selector: 'app-pull-request-item',
  templateUrl: './pull-request-item.component.html',
  styleUrls: ['./pull-request-item.component.css']
})
export class PullRequestItemComponent implements OnInit {

  @Input() public pullRequest: PullRequest;
  public userData: PullRequestUserData;
  public repository: Repository;
  public prData: PullRequestData;

  constructor() { }

  ngOnInit(): void {
    this.userData = this.pullRequest.pullRequestUserData;
    this.repository = this.pullRequest.repository;
    this.prData = this.pullRequest.pullRequestData;
  }

  async navigate(): Promise<void> {
    const response = await fetch(this.prData.url);
    const { html_url } = await response.json();
    window.open(html_url);
  }

}
