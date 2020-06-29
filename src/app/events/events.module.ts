import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventItemComponent } from './components/event-item/event-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LeaderboardsComponent } from './pages/leaderboards/leaderboards.component';
import { LeaderboardRankingsComponent } from './components/leaderboard-rankings/leaderboard-rankings.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [EventsPageComponent, EventItemComponent, LeaderboardsComponent, LeaderboardRankingsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatButtonModule,
    MatListModule,
    MatChipsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule
  ]
})
export class EventsModule { }
