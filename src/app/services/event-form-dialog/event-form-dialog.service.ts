import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventFormDialogService {

  public events: Subject<any> = new Subject();

  constructor() { }

  closeDialog(): void {
    console.log('Next');
    this.events.next('close');
  }
}
