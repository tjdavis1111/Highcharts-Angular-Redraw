import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import HC_map from 'highcharts/modules/map';
// HC_map(Highcharts);

@Component({
  selector: 'app-test-redraw2',
  templateUrl: './test-redraw2.component.html',
  styleUrls: ['./test-redraw2.component.css']
})
export class TestRedraw2Component implements OnInit {
  public Highcharts: typeof Highcharts = Highcharts;
  public chartConstructor = 'chart';
  public chartOptions: Highcharts.Options;
  public chartOptions1: Highcharts.Options;
  public chartOptions2: Highcharts.Options;
  public chart: Highcharts.Chart;

  constructor() {   }

  public ngOnInit() {
    this.render(this);
  }

  public render(thisThis) {
    this.chartOptions1 = {

      title: {
        text: 'Chart2 - Initial chart',
      },
      chart: {
        type: 'column',
        renderTo: 'container',
        events: {
          load() {
            thisThis.chart = this;
          },
        },
      },
      colors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE',
        '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
      legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical',
      },
      xAxis: {
        categories: ['Apples', 'Oranges', 'Bananas'],
        visible: true,
      },
      yAxis: {
        title: {
          text: 'Amount',
        },
        reversed: false,
      },
      series: [{
        type: 'column',
        name: 'Christmas Eve',
        data: [1, 4, 3],
      }, {
        type: 'column',
        name: 'Christmas Day before dinner',
        data: [6, 4, 2],
      }, {
        type: 'column',
        name: 'Christmas Day after dinner',
        data: [8, 4, 3],
      }],
    };

    this.chartOptions2 = {

      title: {
        text: 'Chart2 - Redrawn chart',
      },
      chart: {
        type: 'column',
        renderTo: 'container',
        events: {
          load() {
            thisThis.chart = this;
          },
        },
      },
      colors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE',
        '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal',
      },
      xAxis: {
        categories: ['Apples', 'Bananas'],
      },
      yAxis: {
        title: {
          text: 'Amount',
        },
      },
      series: [{
        type: 'column',
        name: 'Christmas Eve',
        data: [1, 3],
      }, {
        type: 'column',
        name: 'Christmas Day before dinner',
        data: [6, 2],
      }],
    };

    this.chartOptions = this.chartOptions1;

  }

  public redraw() {
    // this.chart.update(this.chartOptions2);
    // https://stackoverflow.com/questions/7880978/highcharts-jquery-destroy-and-rebuild-chart-with-original-options/7882130
    this.chart.destroy();
    // this.chartOptions = this.chartOptions1;
    const c = new Highcharts.Chart(this.chartOptions2);
    this.chart = c;
    console.log('chart redrawn');
  }

  public reset() {
    // this.chart.update(this.chartOptions1);
    // https://stackoverflow.com/questions/7880978/highcharts-jquery-destroy-and-rebuild-chart-with-original-options/7882130
    this.chart.destroy();
    // this.chartOptions = this.chartOptions1;
    const c = new Highcharts.Chart(this.chartOptions1);
    this.chart = c;
    console.log('chart reset');
  }

}
