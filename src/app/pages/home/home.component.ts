import { Component, OnInit } from '@angular/core';
import { IMetricDetails } from './metric-card/metric-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = 'My Activity';
  metrics: IMetricDetails[] = [
    {
      title: 'Calories burn',
      countFigure: '866',
      iconTitle: 'burn',
      progressValue: '55',
    },
    {
      title: 'Steps',
      countFigure: '7579',
      iconTitle: 'footprint',
      progressValue: '75',
    },
    {
      title: 'Left today',
      countFigure: '27',
      countUnit: 'mins',
      iconTitle: 'watch',
      progressValue: '82',
    },
  ];

  goatChart: any = {
    series: [
      {
        name: '',
        data: [12, 11, 4, 7, 10, 4, 6],
      },
    ],
    chart: {
      height: 220,
      type: 'bar',
      foreColor: '#ffffff',
      fontFamily: 'Roboto',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 10,
        borderRadiusApplication: 'end',
        columnWidth: '40px',
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: ['t', 'w', 't', 'f', 's', 's', 'm'],
      tickPlacement: 'on',
    },
    colors: [
      '#c3ff4d',
      '#c3ff4d',
      '#d7d1ff',
      '#d7d1ff',
      '#c3ff4d',
      '#d7d1ff',
      '#d7d1ff',
    ],
    dataLabels: {
      enabled: false,
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
