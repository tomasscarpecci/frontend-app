import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorialsService {

  readonly baseUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  getEditorials(){
    const url = this.baseUrl + '/editorial';
    return this.http.get<any>(url);
  }

}
