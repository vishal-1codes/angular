import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSixWayComponent } from './input-six-way.component';

describe('InputSixWayComponent', () => {
  let component: InputSixWayComponent;
  let fixture: ComponentFixture<InputSixWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSixWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSixWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
