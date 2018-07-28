import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';
import { forkJoin } from 'rxjs/observable/forkJoin';

import { BusStopModel } from './bus.model';
import { environment } from '../environments/environment';

const httpOptions = { // TODO: must change the account key
    headers: new HttpHeaders({ 'AccountKey': environment.LTA_ACCOUNT_KEY, 'Accept': 'application/json' })
};

@Injectable()
export class BusService {

    private busarrivalv2Url = 'api/BusArrivalv2';

    constructor(private http: HttpClient) { }

    getRoutes(bus: number, direction: number = 1) {
        const url = `assets/data/route-${bus}.${direction}.json`;
        return this.http.get(url);
    }  

    getBusStops(limit: number, lat: any, lon: any): Observable<BusStopModel[]> {
        const url = `assets/data/bus-stops.json`;
        return this.http.get<BusStopModel[]>(url).pipe(
            map( res =>
                { 
                    let nearPlace = [];

                    for ( let r of res ) {

                        let disKm = this.PythagorasEquirectangular(lat, lon, r.Latitude, r.Longitude);
                        if (disKm <= 0.4) { //show only till 0.4 km 
                            r['km'] = disKm;
                            nearPlace.push(r);
                        }
                
                    }  

                    // sort by KM distance to display nearest bus stop
                    return nearPlace.sort((a, b) => a.km - b.km) ;
                
                })
        );
    }

    getLatLong(bus: number, direction: number = 1) {
        const url = `assets/data/latlong-${bus}.${direction}.json`;
        return this.http.get(url);
    }


    /** GET BusArrival by BusStopCode. Will 404 if id not found */
    getBusArrival(BusStopCode: number): Observable<any> {
    const url = `${this.busarrivalv2Url}?BusStopCode=${BusStopCode}`;
    return this.http.get<any>(url, httpOptions).pipe(
      tap(_ => console.log(`fetched BusStopCode=${BusStopCode}`)),
      catchError(this.handleError<any>(`getBusArrival BusStopCode=${BusStopCode}`))
    );
    }

      

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        //this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }    

  
    // Convert Degress to Radians
    Deg2Rad(deg: any): any {
        return deg * Math.PI / 180;
    }

    PythagorasEquirectangular(lat_1: any, lon_1: any, lat_2: any, lon_2: any): any {
      let lat1 = this.Deg2Rad(lat_1);
      let lat2 = this.Deg2Rad(lat_2);
      let lon1 = this.Deg2Rad(lon_1);
      let lon2 = this.Deg2Rad(lon_2);
      let R = 6371; // km
      let x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
      let y = (lat2 - lat1);
      let d = Math.sqrt(x * x + y * y) * R;
      return d;
      }


}
