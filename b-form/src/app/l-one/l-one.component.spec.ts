import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LOneComponent } from './l-one.component';

describe('LOneComponent', () => {
  let component: LOneComponent;
  let fixture: ComponentFixture<LOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
