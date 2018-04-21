import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { BusComponent } from './bus/bus.component';
import { BusService } from './bus.service';

import { HttpClientModule } from '@angular/common/http';
import { BusRoutesComponent } from './bus-routes/bus-routes.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BusComponent,
    BusRoutesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [BusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
