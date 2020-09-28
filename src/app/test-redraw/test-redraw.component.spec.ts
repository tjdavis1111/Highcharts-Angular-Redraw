/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestRedrawComponent } from './test-redraw.component';

describe('TestRedrawComponent', () => {
  let component: TestRedrawComponent;
  let fixture: ComponentFixture<TestRedrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRedrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRedrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
