import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';
import {DogDataService} from '../dog-data.service'

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
  showYAxis = true;
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

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

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
