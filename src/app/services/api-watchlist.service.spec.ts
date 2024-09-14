import { TestBed } from '@angular/core/testing';

import { ApiWatchlistService } from './api-watchlist.service';

describe('ApiWatchlistService', () => {
  let service: ApiWatchlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiWatchlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
