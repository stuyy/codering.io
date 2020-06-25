import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardRankingsComponent } from './leaderboard-rankings.component';

describe('LeaderboardRankingsComponent', () => {
  let component: LeaderboardRankingsComponent;
  let fixture: ComponentFixture<LeaderboardRankingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardRankingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
