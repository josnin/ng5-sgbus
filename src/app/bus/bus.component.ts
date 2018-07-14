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

  constructor(private bs: BusService ) { }

  ngOnInit() {
    this.bs.getBusStops().subscribe(res => this.bStopsCode = res);
  }

  getBusArrivals(id: number): void {
    this.bs.getBusArrival(id).subscribe(res => this.bArrivals = res);
  }
  
}
