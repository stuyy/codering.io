import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { AuthGuard } from '../guards/auth.guard';
import { LeaderboardsComponent } from './pages/leaderboards/leaderboards.component';
import { PullRequestComponent } from '../github/pages/pull-request/pull-request.component';

const routes: Routes = [
  { path: '', component: EventsPageComponent },
  { path: ':id/leaderboards', component: LeaderboardsComponent },
  { path: ':id/pull-requests', component: PullRequestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
