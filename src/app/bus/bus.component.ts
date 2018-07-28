import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { BusStopModel } from '../bus.model';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})

export class BusComponent implements OnInit {

  bArrivals: any; //TODO: must use model interface in bus.model
  bStopsCode: BusStopModel[];
  position: any;

  constructor(private bs: BusService ) { }

  ngOnInit() {

     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
             (position) => {
                this.position = position;
                this.bs.getBusStops(15, this.position.coords.latitude, this.position.coords.longitude).subscribe(res => this.bStopsCode = res);
             }, (error) => {
                 console.error(`Geolocation error: ${error}`);    
             }
         );
     } else {
         console.error('Geolocation not supported in this browser');
      }


   
 }



  getBusArrivals(id: number): void {
    this.bs.getBusArrival(id).subscribe(res => this.bArrivals = res);
  }
  
}
