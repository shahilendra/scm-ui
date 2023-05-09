import { TestBed } from '@angular/core/testing';

import { AnimalBreedingService } from './animal-breeding.service';

describe('AnimalBreedingService', () => {
  let service: AnimalBreedingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalBreedingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
