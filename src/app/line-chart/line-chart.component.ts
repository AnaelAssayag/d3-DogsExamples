import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';
import {DogDataService} from '../dog-data.service';
import {NgxChartsModule} from '@swimlane/ngx-charts'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  single: any[];
  multi: any[];
  dogsPieData: any[];

  view: any[] = [700, 400];

  // options

  //Line chart
  showXAxis = true;
  showYAxis = false;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  //Pies
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  //Advanced Pies
  label = "kg"

  colorScheme = {
    domain: ['#FE0500', '#4842B7', '#00B852', '#FE9200','#7F5345' ]
  };
  //Tree
  tooltipDisabled = false
  min= 0
  max= 100
  angleSpan= 240
  startAngle= -120
  bigSegments= 10
  smallSegments= 5

  //gauge

  // line, area
  autoScale = true;





  constructor(private dogDataService: DogDataService) 
  {
    this.dogsPieData = dogDataService.getDogsPie();
    Object.assign(this, {single, multi})
  }
  
  onSelect(event) {
    console.log(event);
  }
  ngOnInit() {
  }

}
