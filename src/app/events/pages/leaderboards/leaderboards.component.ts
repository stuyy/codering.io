import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, mergeMap, takeUntil } from 'rxjs/operators';
import { EventService } from 'src/app/services/events/event.service';
import { Subject } from 'rxjs';
import { LeaderboardData } from 'src/app/models/LeaderboardData';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit, OnDestroy {

  private destroyed$: Subject<boolean> = new Subject();
  public leaderboardData: LeaderboardData[] = [];
  public columnDefinitions = ['Username', 'Points', 'Contributions', 'Pull Requests', 'Merges'];

  constructor(private route: ActivatedRoute, private events: EventService) { }

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroyed$))
      .pipe(pluck('id'))
      .pipe(mergeMap((id: string) => this.events.getLeaderboards(id)))
      .subscribe((data: LeaderboardData[]) => {
        this.leaderboardData = data;
      }, (err) => console.log(err));

  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }
  
}
