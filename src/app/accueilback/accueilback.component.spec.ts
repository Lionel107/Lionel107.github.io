import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilbackComponent } from './accueilback.component';

describe('AccueilbackComponent', () => {
  let component: AccueilbackComponent;
  let fixture: ComponentFixture<AccueilbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
