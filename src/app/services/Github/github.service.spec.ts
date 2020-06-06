import { TestBed } from '@angular/core/testing';

import { GithubService } from './github.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: []
    });
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
