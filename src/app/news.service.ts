import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



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

 deleteNew(id:string){
    const url = this.baseUrl + '/news/' + id;
    return this.http.delete<any>(url);
  }

  createNew(newsData: any) {
    const url = this.baseUrl + '/news/';
    return this.http.post<any>(url, newsData);
  }

}


