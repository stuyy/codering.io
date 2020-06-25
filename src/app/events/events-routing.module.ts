import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { AuthGuard } from '../guards/auth.guard';
import { LeaderboardsComponent } from './pages/leaderboards/leaderboards.component';

const routes: Routes = [
  { path: '', component: EventsPageComponent },
  { path: ':id/leaderboards', component: LeaderboardsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
