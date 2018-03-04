import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {LineChartComponent} from './line-chart/line-chart.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DogDataService } from './dog-data.service';


// import { NgxUIModule } from '@swimlane/ngx-ui';



import { AppComponent } from './app.component';
import { CustomChartComponent } from './custom-chart/custom-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    CustomChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule

  ],
  providers: [DogDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
