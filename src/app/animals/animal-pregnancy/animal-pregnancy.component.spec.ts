import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPregnancyComponent } from './animal-pregnancy.component';

describe('AnimalPregnancyComponent', () => {
  let component: AnimalPregnancyComponent;
  let fixture: ComponentFixture<AnimalPregnancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalPregnancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalPregnancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
