import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  //constructor(private _http:HttpClient) { }
  constructor() {
  }

  searchBy(specialty:string, city:string) {
    //return this._http.get(`http://localhost:8080/doctor/search?s=${specialty}&c=${city}'`);
    //return this._http.get('http://localhost:8080/doctor/search?s=logy&c=lima');
  }
}
