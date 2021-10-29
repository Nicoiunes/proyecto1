import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  check(u, c){
    return this.http.post('http://localhost:3001/login', {u, c})
  }
}
