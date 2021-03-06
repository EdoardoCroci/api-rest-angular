import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Employee } from './shared/employee';
import { retry, catchError } from 'rxjs/operators';
 
@Injectable({providedIn: 'root'})
export class DataRestClientService {
    constructor(private http: HttpClient) { }
    
    httpOptions = {
        headers: new HttpHeaders ({
            'Content-type': 'application/json'
        })
    }

    getData(apiUrl: string): Observable<Employee> {
        return this.http.get<Employee>(apiUrl)
        .pipe(
            retry(1),
            //catchError(this.handleError)
        );
    }

    postData(apiUrl: string, employee: Employee) {
        return this.http.post<Employee>(apiUrl, JSON.stringify(employee), this.httpOptions)
        .pipe(
            retry(1),
            //catchError(this.handleError)
        );
    }

    deleteData(apiUrl: string) {
        return this.http.delete(apiUrl)
        .pipe(
            retry(1),
            //catchError(this.handleError)
        )
    }

    updateData(apiUrl: string, employee: Employee) {
        return this.http.put(apiUrl, JSON.stringify(employee), this.httpOptions)
        .pipe(
            retry(1),
            //catchError(this.handleError)
        )
    }
}
