import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-navigator',
  templateUrl: './dashboard-navigator.component.html',
  styleUrls: ['./dashboard-navigator.component.css']
})
export class DashboardNavigatorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  navigatePullRequest() {
    this.router.navigate(['/pullrequest'])
  }

  navigateApprovedPullRequest() {
    this.router.navigate(['/'])
  }
}
