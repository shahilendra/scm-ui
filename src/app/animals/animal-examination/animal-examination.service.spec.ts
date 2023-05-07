import { TestBed } from '@angular/core/testing';

import { AnimalExaminationService } from './animal-examination.service';

describe('AnimalExaminationService', () => {
  let service: AnimalExaminationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalExaminationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
