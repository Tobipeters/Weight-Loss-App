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
      height: 130,
      type: 'area',
      foreColor: '#a4abb2;',
      fontFamily: 'Roboto',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      area: {
        fillTo: 'origin',
      },
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

    stroke: {
      show: true,
      curve: 'straight',
      width: 2,
      lineCap: 'butt',
      colors: ['#c3ff4d', '#ffffff'],
      fill: {
        colors: ['#fff'],
      },
    },
  };

  sleepChart: any = {
    series: [
      // data:
      {
        name: '',
        data: [8, 12, 4, 7, 10, 4, 2],
      },
    ],
    chart: {
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
