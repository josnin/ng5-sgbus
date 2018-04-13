import { Component, OnInit } from '@angular/core';
//import { Bus } from '../bus';
import { BusService } from '../bus.service';

import { BusRoute } from '../bus.model';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  busroutes: BusRoute[];
  panelOpenState: boolean = false;
  //  busarrivals: RootObject[];
  busarrivals: any; //TODO: must use model interface in bus.model

  constructor(public busService: BusService ) { }

  ngOnInit() {
    this.getBusRoutes();
    //this.getBusArrivals();
  }

  getBusRoutes(): void {
    this.busService.getBusRoutes()
        .subscribe(busroutes => this.busroutes = busroutes);
  }  

  getBusArrivals(id: number): void {
    console.log(id);
    this.busService.getBusArrival(id)
        .subscribe(busarrivals => this.busarrivals = busarrivals);
  }
}
