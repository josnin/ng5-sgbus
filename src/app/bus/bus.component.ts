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

  //  busarrivals: RootObject[];
  busarrivals: any; //TODO: must use model interface in bus.model

  constructor(private busService: BusService ) { }

  ngOnInit() {
    this.getBusRoutes();
  //this.getBusRoutesByServiceNo(100);
  }

  getBusRoutes(): void {
    this.busService.getBusRoutes()
      .subscribe(busroutes => this.busroutes = busroutes);
  }  
  
  getBusRoutesByServiceNo(id: number): void {
    this.busService.getBusRoutesByServiceNo(id)
        .subscribe(busroutes => this.busroutes = busroutes);
  }  

  getBusArrivals(id: number): void {
    console.log(id);
    this.busService.getBusArrival(id)
        .subscribe(busarrivals => this.busarrivals = busarrivals);
  }
  
  showBusRoutesbyBusNo(b_no: number) {
    console.log(`bus no ${b_no}`);
  }

}
