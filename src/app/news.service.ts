import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  readonly baseUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  getNews(){
    const url = this.baseUrl + '/news';
    return this.http.get<any>(url);
  }

}


