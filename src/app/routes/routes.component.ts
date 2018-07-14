import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { ActivatedRoute } from '@angular/router'; 
import { Map, point, icon, tileLayer, latLng, polygon, marker, circle, polyline } from 'leaflet';

//import { decode } from 'polyline-encoded';


@Component({
  selector: 'app-bus-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  private bus: number;
  private oneMap: any;
  private options: any;
  private routeMap: any; 
  private busStops: any;
  private latLong: any;

  constructor(
    private bs: BusService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.bus = +this.route.snapshot.paramMap.get('id');
    this.bs.getRoutes(this.bus).subscribe(res => this.busStops = res);
    this.bs.getLatLong(this.bus).subscribe(res => {

        // build map config

        this.latLong = res;
        console.log(this.latLong);
        this.routeMap = polyline(this.latLong);
        // Define our base layers so we can reference them multiple times
        this.oneMap = tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', {
            maxZoom: 25,
            minZoom: 11,
            detectRetina: true,
            attribution: '<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> Map Data &copy; <a href="https://onemap.sg">OneMap Singapore</a> contributions'
        });
        
        
        this.options = {
            layers: [ this.oneMap, this.routeMap ],
            zoom: 13,
            center: latLng([1.290270, 103.851959])
            };


        // build map config

    });
    
  }






 onMapReady(map: Map) {
    map.fitBounds(this.routeMap.getBounds(), {
      padding: point(24, 24),
      maxZoom: 19,
      animate: true
    });
  }


}
