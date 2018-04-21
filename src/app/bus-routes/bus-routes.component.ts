import { Component, OnInit } from '@angular/core';
import { BusRoute } from '../bus.model';
import { BusService } from '../bus.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-bus-routes',
  templateUrl: './bus-routes.component.html',
  styleUrls: ['./bus-routes.component.css']
})
export class BusRoutesComponent implements OnInit {

  private b_routes: BusRoute[];
  private s_ServiceNo: number;

  constructor(
    private busService: BusService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getBusRouters();
  }

  getBusRouters(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.s_ServiceNo = id;
    this.busService.getBusRoutesByServiceNo(id)
    .subscribe(b_routes => this.b_routes = b_routes);
  }

}
