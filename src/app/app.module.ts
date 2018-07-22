import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { BusComponent } from './bus/bus.component';
import { NowInMinutesPipe } from './now-in-minutes.pipe'
import { BusService } from './bus.service';

import { HttpClientModule } from '@angular/common/http';
import { RoutesComponent } from './routes/routes.component';
import { AppRoutingModule } from './/app-routing.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [
    AppComponent,
    BusComponent,
    RoutesComponent,
    NowInMinutesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    LeafletModule.forRoot(),
    AppRoutingModule
  ],
  providers: [BusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
