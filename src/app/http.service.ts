import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.http.get(url).pipe(map(data => {
      return data as T;
    }),
    retry(3),
    catchError(err => { 
      return of(null);
    }));
  }

  post(url: string, body: any): Observable<any>{
    return this.http.post(url, body).pipe(map(data => {
      return data;
    }),
    //no retry on post, dangerous
    catchError(err => { 
      return of(null);
    }));
  }

  put(url: string, body: any): Observable<any>{
    return this.http.put(url, body).pipe(map(data => {
      return data;
    }),
    retry(3),
    catchError(err => { 
      return of(null);
    }));
  }

  patch(url: string, body: any): Observable<any>{
    return this.http.patch(url, body).pipe(map(data => {
      return data;
    }),
    retry(3),
    catchError(err => { 
      return of(null);
    }));
  }

  delete(url: string): Observable<any>{
    return this.http.delete(url).pipe(map(data => {
      return data;
    }),
    retry(3),
    catchError(err => { 
      return of(null);
    }));
  }
}
