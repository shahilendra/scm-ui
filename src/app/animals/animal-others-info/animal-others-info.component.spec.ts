import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalOthersInfoComponent } from './animal-others-info.component';

describe('AnimalOthersInfoComponent', () => {
  let component: AnimalOthersInfoComponent;
  let fixture: ComponentFixture<AnimalOthersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalOthersInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalOthersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
