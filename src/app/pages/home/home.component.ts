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
      iconTitle: 'watch',
      progressValue: '55',
    },
    {
      title: 'Steps',
      countFigure: '7579',
      iconTitle: 'watch',
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
      height: 250,
      type: 'bar',
      foreColor: '#ffffff',
      fontFamily: 'Roboto',
    },
    plotOptions: {
      bar: {
        borderRadius: 12,
        borderRadiusApplication: 'end',
        columnWidth: '50%',
    
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
  };

  constructor() {}

  ngOnInit(): void {}
}
