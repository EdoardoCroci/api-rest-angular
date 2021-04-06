import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';
import { Employee } from './shared/employee';

@Injectable({providedIn: 'root'})
export class DataRestClientService {
    constructor(private http: HttpClient) { }
    
    getData(apiUrl: string): Observable<Employee> {
        return this.http.get<Employee>(apiUrl).pipe(); 
    }

    postData(apiUrl: string, employee: Employee): void {
        this.http.post(apiUrl, employee);
    }
}