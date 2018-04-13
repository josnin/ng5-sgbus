import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
//import { NowInMinutesPipe } from './now-in-minutes.pipe';


import { AppComponent } from './app.component';
import { BusComponent } from './bus/bus.component';
import { BusService } from './bus.service';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [BusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
