import { TestBed } from '@angular/core/testing';

import { BodyScoreService } from './body-score.service';

describe('BodyScoreService', () => {
  let service: BodyScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
