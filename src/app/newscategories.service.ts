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

  deleteNewCategory(id: string) {
  const url = `${this.baseUrl}/news/category/${id}`;
  return this.http.delete<any>(url);
  }

  createNewCategory(categoryData: any) {
    const url = this.baseUrl + '/news/category';
    return this.http.post<any>(url, categoryData);
  }
}
