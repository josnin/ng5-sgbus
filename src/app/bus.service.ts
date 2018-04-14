import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';

import { BusRoute } from './bus.model';

const httpOptions = { // TODO: must change the account key
    headers: new HttpHeaders({ 'AccountKey': '', 'Accept': 'application/json' })
};

@Injectable()
export class BusService {

  private busrouteUrl = 'api/BusRoutes';
  private busarrivalv2Url = 'api/BusArrivalv2';

  constructor(private http: HttpClient) { }

  getBusRoutes(): Observable<BusRoute[]> {
      return this.http.get<BusRoute[]>(this.busrouteUrl, httpOptions)
        .pipe(
          tap(busroutes => console.log(busroutes)),
          catchError(this.handleError('getBusRoutes', []))               
        );
  }

  getBusRoutesByServiceNo(ServiceNo: number): Observable<any> {
      return this.http.get<any>(this.busrouteUrl, httpOptions)
          .pipe(
            map(res => { 
                let br = res.value.filter(res1 => res1.ServiceNo == ServiceNo);
                return br;
            }),
            tap(busroutes => console.log(`fetched ServiceNo=${ServiceNo}`)),
            catchError(this.handleError(`getBusRoutes ServiceNo=${ServiceNo}`))
          );
  }

  //TODO: must use interface from bus.model instead of using generic any

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

  
}
