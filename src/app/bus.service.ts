import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { BusRoute } from './bus.model';

const httpOptions = {
    headers: new HttpHeaders({ 'AccountKey': 'xxxxxxxxxxxxxxxxxxxx', 'Accept': 'application/json' })
};


@Injectable()
export class BusService {

  private busrouteUrl = 'api/BusRoutes';

  constructor(private http: HttpClient) { }

  getBusRoutes(): Observable<BusRoute[]> {
      return this.http.get<BusRoute[]>(this.busrouteUrl, httpOptions)
        .pipe(
          tap(busroutes => console.log(busroutes)),
          catchError(this.handleError('getBusRoutes', []))               
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
