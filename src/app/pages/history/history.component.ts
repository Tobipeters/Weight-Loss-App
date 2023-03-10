import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  title: string = 'History';
  today: Date = new Date();

  weightChart: any = {
    series: [
      // data:
      {
        name: '',
        data: [6, 4, 8, 3, 7, 6, 8],
      },
    ],
    chart: {
      width: '100%',
      height: 130,
      type: 'line',
      foreColor: '#a4abb2;',
      fontFamily: 'Roboto',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {},
    grid: {
      show: false,
    },
    xaxis: {
      categories: ['t', 'w', 't', 'f', 's', 's', 'm'],
      tickPlacement: 'on',
    },
    yaxis: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#7b66ff'],
        fontSize: '8px',
      },
      background: {
        enabled: true,
        foreColor: '#7b66ff',
        borderRadius: 100,
      },
    },
    stroke: {
      show: true,
      curve: 'straight',
      width: 3,
      lineCap: 'butt',
      colors: ['#ccff68'],
      // fill: {
      //   colors: ['#fff'],
      // },
    },

    // colors: ['#c3ff4d', '#7b66ff'],
  };

  //////////////////////////////////////////////////
  sleepChart: any = {
    series: [
      // data:
      {
        name: '',
        data: [8, 12, 4, 7, 10, 4, 2],
      },
    ],
    chart: {
      width: '100%',
      height: 130,
      type: 'bar',
      foreColor: '#a4abb2;',
      fontFamily: 'Roboto',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 3,
        borderRadiusApplication: 'end',
        columnWidth: '35px',
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      // labels: {
      //   rotate: -45,
      // },
      categories: ['t', 'w', 't', 'f', 's', 's', 'm'],
      tickPlacement: 'on',
    },
    yaxis: {
      show: false,
    },
    colors: ['#bdb3ff', '#7b66ff', '#bdb3ff'],
  };

  constructor() {}

  ngOnInit(): void {}
}
