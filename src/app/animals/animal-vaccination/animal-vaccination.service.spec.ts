import { TestBed } from '@angular/core/testing';

import { AnimalVaccinationService } from './animal-vaccination.service';

describe('AnimalVaccinationService', () => {
  let service: AnimalVaccinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalVaccinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
