import { Component, OnInit, OnDestroy } from '@angular/core';
import { PullRequest } from 'src/app/models/PullRequest';
import { FormControl } from '@angular/forms';
import { GithubService } from 'src/app/services/Github/github.service';
import { fromEvent, Subscription } from 'rxjs';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';
import { Router } from '@angular/router';
import { fadeInOut } from 'src/app/animations/animations';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  animations: [
    fadeInOut,
  ]
})
export class GithubComponent implements OnInit, OnDestroy {

  public loading: boolean = true;
  public pullRequests: PullRequest[] = [];
  public displayedColumns = ['User', 'Username', 'PR #', 'Repository', 'State', 'Date'];
  public mobileColumns = ['User', 'PR #', 'State'];
  public data = this.displayedColumns;
  public mobile: boolean = false;
  public filterForm: FormControl;
  public startPosition = 0;
  public sidenavSubscription: Subscription;
  constructor(
    private github: GithubService,
    private sidenav: SidenavService,
    private router: Router) {
    this.filterForm = new FormControl('');
  }

  ngOnInit(): void {
    const overlay = document.getElementById('overlay2');
    this.handleResponsive();
    this.github.getAllPullRequests().subscribe((pullRequests: PullRequest[]) => {
      setTimeout(() => {
        this.pullRequests = pullRequests;
        this.loading = false;
      }, 300);
    }, (err) => {
      this.loading = false;
      console.log(err);
    });
  
    fromEvent(window, 'resize').subscribe((event) => {
      this.handleResponsive();
    }, (err) => console.log(err));
  
    this.sidenavSubscription = this.sidenav.sidenavEvents.subscribe((opened: boolean) => {
      if (opened) overlay.style.display = 'block';
      else overlay.style.display = 'none';
    });
    
    fromEvent(overlay, 'click').subscribe((event) => {
      console.log(event);
      this.sidenav.close();
    }, (err) => console.log(err));
    
    fromEvent(window, 'scroll').subscribe((event) => {
      if (this.isScrollingDown() && this.atBottomOfPage()) {
        console.log('At the bottom!')
        // this.pullRequests = this.pullRequests.concat(this.pullRequests)
      }
    }, (err) => console.log(err));
  }

  ngOnDestroy(): void {
    this.sidenavSubscription.unsubscribe();
    console.log('Unsubscribed GitHub');
  }
  
  private handleResponsive() {
    if (window.innerWidth <= 650) {
      this.data = this.mobileColumns;
      this.mobile = true;
    } else {
      this.data = this.displayedColumns;
      this.mobile = false;
    }
  }
  
  private isScrollingDown() {
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (currentPosition > this.startPosition) {
      this.startPosition = currentPosition <= 0 ? 0 : currentPosition;
      console.log('Scrolling down');
      return true;
    } else {
      this.startPosition = currentPosition <= 0 ? 0 : currentPosition;
      console.log('Scrolling Up');
      return false;
    }
  }

  private atBottomOfPage() {
    return (window.innerHeight + window.scrollY) >= document.body.scrollHeight;
  }
}
