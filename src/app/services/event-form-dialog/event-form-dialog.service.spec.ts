import { TestBed } from '@angular/core/testing';

import { EventFormDialogService } from './event-form-dialog.service';

describe('EventFormDialogService', () => {
  let service: EventFormDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventFormDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
