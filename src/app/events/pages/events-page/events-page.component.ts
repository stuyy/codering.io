import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventService } from 'src/app/services/Event/event.service';
import { GithubEvent } from 'src/app/models/Event';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';
import { takeUntil } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';
import { fadeInOut } from 'src/app/animations/animations';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css'],
  animations: [
    fadeInOut
  ]
})
export class EventsPageComponent implements OnInit {

  public events: GithubEvent[] = [];
  public destroyed$: Subject<boolean> = new Subject<boolean>();
  public loading: boolean = true;

  constructor(private event: EventService, private sidenav: SidenavService) { }

  ngOnInit(): void {
    const overlay = document.getElementById('overlay5');
    this.event.getEvents()
      .subscribe((events: GithubEvent[]) => {
        setTimeout(() => {
          this.events = events;
          this.loading = false;
          console.log(this.events);
        }, 500);
      }, (err) => {
        console.log(err);
        setTimeout(() => {
          this.loading = false;
        }, 500);
      });
    this.sidenav.sidenavEvents
      .pipe(takeUntil(this.destroyed$))
      .subscribe((opened: boolean) => {
        if (opened) overlay.style.display = 'block';
        else overlay.style.display = 'none';
      });
      
    fromEvent(overlay, 'click')
      .subscribe((event) => this.sidenav.close());
  }

}
