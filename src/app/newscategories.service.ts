import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewscategoriesService {

  readonly baseUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  getNewscategories(){
    const url = this.baseUrl + '/news/category';
    return this.http.get<any>(url);
  }
}
