import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from 'src/app/services/Github/github.service';
import { PullRequest } from 'src/app/models/PullRequest';
import { fromEvent, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { takeUntil, pluck , mergeMap } from 'rxjs/operators';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';
import { ActivatedRoute } from '@angular/router';
import { fadeInOut } from 'src/app/animations/animations';

@Component({
  selector: 'app-pull-request',
  templateUrl: './pull-request.component.html',
  styleUrls: ['./pull-request.component.css'],
  animations: [
    fadeInOut,
  ]
})
export class PullRequestComponent implements OnInit, OnDestroy {

  public pullRequests: PullRequest[];
  public displayedColumns = ['User', 'Username', 'PR #', 'Repository', 'State', 'Date'];
  public mobileColumns = ['User', 'PR #', 'State'];
  public data = this.displayedColumns;
  public mobile: boolean = false;
  public filterForm: FormControl;
  public destroyed$: Subject<boolean> = new Subject<boolean>();
  public eventId: string = '';
  public loading: boolean = true;

  constructor(
    private github: GithubService,
    private sidenav: SidenavService,
    private route: ActivatedRoute) {
    this.filterForm = new FormControl('');
  }

  ngOnInit(): void {
    const overlay = document.getElementById('overlay3');
    this.handleResponsive();
    // this.github.getPullRequests()
    //   .pipe(takeUntil(this.destroyed$))
    //   .subscribe((pullRequests: PullRequest[]) => {
    //     this.pullRequests = pullRequests;
    //   }, (err) => console.log(err));
      
    fromEvent(window, 'resize')
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => this.handleResponsive());
    
    this.sidenav.sidenavEvents
      .pipe(takeUntil(this.destroyed$))
      .subscribe((opened: boolean) => {
        if (opened) overlay.style.display = 'block';
        else overlay.style.display = 'none';
      });

    fromEvent(overlay, 'click')
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => this.sidenav.close());
  
    this.route.params
      .pipe(takeUntil(this.destroyed$))
      .pipe(pluck('id'))
      .pipe(mergeMap((id) => this.github.getPullRequestsByEventId(id)))
      .subscribe((pullRequests: PullRequest[]) => {
        setTimeout(() => {
          this.pullRequests = pullRequests;
          this.loading = false;
        }, 300);
      })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
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
