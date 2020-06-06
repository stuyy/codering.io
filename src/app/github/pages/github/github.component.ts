import { Component, OnInit } from '@angular/core';
import { PullRequest } from 'src/app/models/PullRequest';
import { FormControl } from '@angular/forms';
import { GithubService } from 'src/app/services/Github/github.service';
import { fromEvent } from 'rxjs';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  public pullRequests: PullRequest[] = [];
  public displayedColumns = ['User', 'Username', 'PR #', 'Repository', 'State', 'Date'];
  public mobileColumns = ['User', 'PR #', 'State'];
  public data = this.displayedColumns;
  public mobile: boolean = false;
  public filterForm: FormControl;
  public hamburgerMenuClicked = false;
  public startPosition = 0;
  constructor(private github: GithubService, private sidenav: SidenavService) {
    this.filterForm = new FormControl('');
  }

  ngOnInit(): void {

    console.log(window.innerHeight + window.scrollY);
    console.log(document.body.offsetHeight)

    const overlay = document.getElementById('overlay');
    this.handleResponsive();
    this.github.getAllPullRequests()
      .subscribe((pullRequests: PullRequest[]) => {
        this.pullRequests = pullRequests;
      });
  
    fromEvent(window, 'resize')
      .subscribe((event) => {
        this.handleResponsive();
      });
  
    this.sidenav.sidenavEvents.subscribe((opened: boolean) => {
      if (opened) {
        this.hamburgerMenuClicked = true;
        overlay.style.display = 'block';
      } else {
        this.hamburgerMenuClicked = false;
        overlay.style.display = 'none';
      }
    });
    
    fromEvent(overlay, 'click')
      .subscribe((event) => {
        console.log(event);
        this.sidenav.close();
      });
    
    fromEvent(window, 'scroll')
      .subscribe((event) => {
        if (this.isScrollingDown() && this.atBottomOfPage()) {
          console.log('At the bottom!')
          // this.pullRequests = this.pullRequests.concat(this.pullRequests)
        }
      })
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
