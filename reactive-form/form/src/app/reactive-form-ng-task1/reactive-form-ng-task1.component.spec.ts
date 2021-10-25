import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormNgTask1Component } from './reactive-form-ng-task1.component';

describe('ReactiveFormNgTask1Component', () => {
  let component: ReactiveFormNgTask1Component;
  let fixture: ComponentFixture<ReactiveFormNgTask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormNgTask1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormNgTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
