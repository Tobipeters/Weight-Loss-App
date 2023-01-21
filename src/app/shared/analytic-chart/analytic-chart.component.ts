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
  @Input() xaxis!: any;
  @Input() yaxis!: any;
  @Input() colors!: any[];
  @Input() stroke!: ApexStroke;
  @Input() dataLabels!: ApexDataLabels;

  chartOptions!: Partial<IChartOptions> | any;
  showChart: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      series: this.series,
      chart: this.chart,
      plotOptions: this.plotOptions,
      dataLabels: this.dataLabels,
      grid: this.grid,
      xaxis: this.xaxis,
      yaxis: this.yaxis,
      colors: this.colors,
      legend: {
        show: false,
      },
      stroke: this.stroke,
  
    };

    this.showChart = true;
  }

  ngOnDestroy(): void {
    this.chartOptions = null;
    this.showChart = false;
  }
}
