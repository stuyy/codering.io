import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', component: EventsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
