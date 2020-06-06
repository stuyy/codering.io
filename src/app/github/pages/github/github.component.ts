import { Component, OnInit } from '@angular/core';
import { PullRequest } from 'src/app/models/PullRequest';
import { FormControl } from '@angular/forms';
import { GithubService } from 'src/app/services/Github/github.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

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
    this.github.getAllPullRequests()
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
