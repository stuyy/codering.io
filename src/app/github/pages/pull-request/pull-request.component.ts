import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/Github/github.service';
import { PullRequest, PullRequestUserData, Repository, PullRequestData } from 'src/app/models/PullRequest';
import { Observable, fromEvent } from 'rxjs';
import { User } from 'src/app/models/User';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pull-request',
  templateUrl: './pull-request.component.html',
  styleUrls: ['./pull-request.component.css']
})
export class PullRequestComponent implements OnInit {

  public pullRequests: PullRequest[];
  public displayedColumns = ['User', 'Username', 'PR #', 'Repository', 'State', 'Date'];
  public mobileColumns = ['User', 'PR #', 'State'];
  public data = this.displayedColumns;
  public mobile: boolean = false;
  public filterForm: FormControl;

  constructor(private github: GithubService) {
    this.filterForm = new FormControl('');
  }

  ngOnInit(): void {
    this.handleResponsive();
    this.github.getPullRequests()
      .subscribe((pullRequests: PullRequest[]) => {
        this.pullRequests = pullRequests;
      });
    fromEvent(window, 'resize')
      .subscribe((event) => {
        this.handleResponsive();
      });
  }
  private handleResponsive() {
    if (window.innerWidth <= 600) {
      this.data = this.mobileColumns;
      this.mobile = true;
    } else {
      this.data = this.displayedColumns;
      this.mobile = false;
    }
  }
}
