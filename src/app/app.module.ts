import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.component';


import { routing } from './app.routing';
import { ChartModule } from 'angular2-highcharts'; 
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { MyDatePickerModule } from 'mydatepicker';



declare var require: any;
export function highchartsFactory() {

    var hc = require('highcharts');
    var hcm = require('highcharts/highcharts-more');
    var sg = require('highcharts/modules/solid-gauge');

    hcm(hc);
    sg(hc);

    return hc;
}

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpModule,routing,ChartModule,MyDatePickerModule,FormsModule],
  declarations: [AppComponent,HomeComponent],
  bootstrap: [AppComponent],
  providers: [  
                {provide: HighchartsStatic,useFactory: highchartsFactory}]
})
export class AppModule {}

