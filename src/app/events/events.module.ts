import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventItemComponent } from './components/event-item/event-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [EventsPageComponent, EventItemComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatButtonModule,
    MatListModule,
    MatChipsModule,
    MatCardModule
  ]
})
export class EventsModule { }
