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

  constructor(public busService: BusService ) { }

  ngOnInit() {
    this.getBusRoutes();
  }

  getBusRoutes(): void {
    this.busService.getBusRoutes()
        .subscribe(busroutes => this.busroutes = busroutes);
  }  

}
