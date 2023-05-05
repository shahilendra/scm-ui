import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkYieldComponent } from './milk-yield.component';

describe('MilkYieldComponent', () => {
  let component: MilkYieldComponent;
  let fixture: ComponentFixture<MilkYieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkYieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilkYieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
