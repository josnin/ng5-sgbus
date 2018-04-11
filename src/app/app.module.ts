import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    HttpClientModule
  ],
  providers: [BusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
