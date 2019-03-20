import { Injectable } from '@angular/core';
import { IEmployee } from './employee.Interface'
import { Http,Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

import { WebSocketSubject, webSocket } from 'rxjs/websocket';
export interface Command {
    action: 'add' | 'delete';
    department: 'sales' | 'rnd';
}
@Injectable()
export class DataService {
     private _commands$: WebSocketSubject<Command>;
     constructor(private _http: Http) { 
        this._commands$ = webSocket('ws://localhost:5555');
     } 

     getEmployees(): Observable<IEmployee[]> {
        return this._http.get('http://ec2-3-17-146-125.us-east-2.compute.amazonaws.com:1337/register/user')
        .pipe(map(this.extractData))
        .pipe(catchError((error:Response) => {
            return throwError(error);
          }
        ));
    }

    postEmployees(data : IEmployee[]):Observable<IEmployee[]> {
       return this._http.post('http://ec2-3-17-146-125.us-east-2.compute.amazonaws.com:1337/register/user',data)
       .pipe(map(this.extractData))
       .pipe(catchError((error:Response) => {
           return throwError(error);
         }
         ));
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {}
    } 

    private handleError(error:Response){
        let errMsg:string;
        errMsg = "error"
        return throwError(errMsg)

    }
    get commands$() {
        return this._commands$;
    }

    doubleAfter2Seconds(x) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(x * 2);
          }, 2000);
        });
      }
}



