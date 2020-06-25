import { Component, OnInit, Input } from '@angular/core';
import { GithubEvent } from 'src/app/models/Event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() event: GithubEvent;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.event);
  }

  viewLeaderboards(): void {
    const { repositoryId } = this.event.repository;
    this.router.navigate([`/events/${repositoryId}/leaderboards`])
  }

  viewPullRequests(): void {
    const { repositoryId } = this.event.repository;
    this.router.navigate([`/github/pullrequest/${repositoryId}`])
  }
}
