import { Component, OnInit } from '@angular/core';
import {DogDataService} from '../dog-data.service';
import {NgxChartsModule} from '@swimlane/ngx-charts'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF, Location } from '@angular/common';
import { AppComponent } from '../app.component';
// import { SparklineComponent } from './sparkline/sparkline.component';
// import { TimelineFilterBarChartComponent } from './timeline-filter-bar-chart/timeline-filter-bar-chart.component';
// import { NgxUIModule } from '@swimlane/ngx-ui';
// import { ComboChartComponent, ComboSeriesVerticalComponent } from './combo-chart';

@Component({
  selector: 'app-custom-chart',
  templateUrl: './custom-chart.component.html',
  styleUrls: ['./custom-chart.component.css']
})
export class CustomChartComponent implements OnInit {
    dogsPieData: any[];
  
    view: any[] = [700, 400];
  
    // options
  
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
      Object.assign(this)
    }
    
    onSelect(event) {
      console.log(event);
    }
    ngOnInit() {
    }
  
  }
  
