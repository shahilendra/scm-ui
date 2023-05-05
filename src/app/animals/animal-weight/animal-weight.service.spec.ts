import { TestBed } from '@angular/core/testing';

import { AnimalWeightService } from './animal-weight.service';

describe('AnimalWeightService', () => {
  let service: AnimalWeightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalWeightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
