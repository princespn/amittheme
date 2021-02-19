import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  private API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private http: HttpClient) { }

  public sendGetRequest(){
    return this.http.get(this.API_URL);
  }
}
