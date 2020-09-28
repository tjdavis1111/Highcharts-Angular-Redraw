import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingSamplesComponent } from './reporting-samples.component';

describe('ReportingSamplesComponent', () => {
  let component: ReportingSamplesComponent;
  let fixture: ComponentFixture<ReportingSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
