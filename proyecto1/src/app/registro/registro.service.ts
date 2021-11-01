import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }
  
  registrarse(datos){
   return this.http.post('http://localhost:3001/registrarse', {datos});
  }
}