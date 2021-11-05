import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POneComponent } from './p-one.component';

describe('POneComponent', () => {
  let component: POneComponent;
  let fixture: ComponentFixture<POneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(POneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
