import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRequestItemComponent } from './pull-request-item.component';

describe('PullRequestItemComponent', () => {
  let component: PullRequestItemComponent;
  let fixture: ComponentFixture<PullRequestItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullRequestItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
