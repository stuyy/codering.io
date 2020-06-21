import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventService } from 'src/app/services/Event/event.service';
import { GithubEvent } from 'src/app/models/Event';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  public events: GithubEvent[] = [];

  constructor(private event: EventService) { }

  ngOnInit(): void {
    this.event.getEvents()
      .subscribe((events: GithubEvent[]) => {
        this.events = events;
        console.log(this.events);
      }, (err) => {
        console.log(err);
      })
  }

}
