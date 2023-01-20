import { Component, OnInit, Input } from '@angular/core';

export interface IMetricDetails{
  iconTitle: string
  title: string
  countFigure:string
  countUnit?: string
  progressValue: string
}

@Component({
  selector: 'app-metric-card',
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.scss'],
})

export class MetricCardComponent implements OnInit {
  @Input() metricDetails!: IMetricDetails;

  constructor() {}

  ngOnInit(): void {}
}
