import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexAnnotations,
  ApexFill,
  ApexStroke,
  ApexGrid,
} from 'ng-apexcharts';

export interface IChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: any; //ApexXAxis;
  annotations: ApexAnnotations;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
}

@Component({
  selector: 'app-analytic-chart',
  templateUrl: './analytic-chart.component.html',
  styleUrls: ['./analytic-chart.component.scss'],
})
export class AnalyticChartComponent implements OnInit, OnDestroy {
  @Input() series: ApexAxisChartSeries | any;
  @Input() chart: ApexChart | any;
  @Input() plotOptions!: ApexPlotOptions;
  @Input() grid!: ApexGrid;
  @Input() xaxis!: any

  chartOptions!: Partial<IChartOptions> | any;
  showChart: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      series: this.series,
      annotations: {
        // points: [
        //   {
        //     // x: 'Bananas',
        //     seriesIndex: 0,
        //     label: {
        //       borderColor: '#775DD0',
        //       offsetY: 0,
        //       style: {
        //         color: '#fff',
        //         background: '#775DD0',
        //       },
        //       // text: 'Bananas are good',
        //     },
        //   },
        // ],
      },
      chart: this.chart,
      plotOptions: this.plotOptions,
      dataLabels: {
        enabled: false,
      },
      // stroke: {
      //   width: 2,
      // },
      grid: this.grid,

      xaxis: this.xaxis,

      yaxis: {
        title: {
          // text: 'Servings',
        },
      },

      fill: {
        colors: ['#c3ff4d', '#d7d1ff']
        // type: 'gradient',
        // gradient: {
        //   shade: 'light',
        //   type: 'horizontal',
        //   shadeIntensity: 0.25,
        //   gradientToColors: undefined,
        //   inverseColors: true,
        //   opacityFrom: 0.85,
        //   opacityTo: 0.85,
        //   stops: [50, 0, 100],
        // },
      },

    };

    this.showChart = true;
  }

  ngOnDestroy(): void {
    this.chartOptions = null;
    this.showChart = false;
  }
}
