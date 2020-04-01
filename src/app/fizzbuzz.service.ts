import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FizzbuzzService {
  constructor(private http : HttpClient) { }

  getFizz(n : number) : Observable<any>{
    return this.http.get(`https://fizz-api.herokuapp.com/api/fizzbuzz?count=${n}`);
  }
}
