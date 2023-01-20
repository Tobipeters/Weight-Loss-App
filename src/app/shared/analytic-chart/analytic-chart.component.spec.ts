import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticChartComponent } from './analytic-chart.component';

describe('AnalyticChartComponent', () => {
  let component: AnalyticChartComponent;
  let fixture: ComponentFixture<AnalyticChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
