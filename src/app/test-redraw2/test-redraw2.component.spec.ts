import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRedraw2Component } from './test-redraw2.component';

describe('TestRedraw2Component', () => {
  let component: TestRedraw2Component;
  let fixture: ComponentFixture<TestRedraw2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRedraw2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRedraw2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
