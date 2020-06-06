import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRequestComponent } from './pull-request.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GithubService } from 'src/app/services/Github/github.service';

describe('PullRequestComponent', () => {
  let component: PullRequestComponent;
  let fixture: ComponentFixture<PullRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullRequestComponent, HttpClientTestingModule ],
      providers: [GithubService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
