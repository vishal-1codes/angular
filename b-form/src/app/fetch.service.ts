import { Injectable } from '@angular/core';

//here we import http client and observable
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  //here we create http client
  constructor(private http:HttpClient) { }


  //here we create method (product)

  url='https://jsonplaceholder.typicode.com/users'
  product():Observable<any>{
    return this.http.get(this.url)
  }



}
