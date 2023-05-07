import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalExaminationComponent } from './animal-examination.component';

describe('AnimalExaminationComponent', () => {
  let component: AnimalExaminationComponent;
  let fixture: ComponentFixture<AnimalExaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalExaminationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
