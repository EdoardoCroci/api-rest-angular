import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';
import { Employee } from './shared/employee';

@Injectable({providedIn: 'root'})
export class DataRestClientService {
    constructor(private http: HttpClient) { }
    
    getData(apiUrl: string): Observable<Employee> {
        return this.http.get<Employee>(apiUrl) 
        .pipe(
            retry(1),
            //catchError(this.handleError) handleError is unknown
        ) 
    }

    addEmployee() {
        
    }
}