import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoneComponent } from './comone.component';

describe('ComoneComponent', () => {
  let component: ComoneComponent;
  let fixture: ComponentFixture<ComoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
