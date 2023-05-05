import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LactationComponent } from './lactation.component';

describe('LactationComponent', () => {
  let component: LactationComponent;
  let fixture: ComponentFixture<LactationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LactationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LactationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
