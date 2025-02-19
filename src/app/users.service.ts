import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly baseUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  getUsers(){
    const url = this.baseUrl + '/users';
    return this.http.get<any>(url);
  }

  deleteUser(id: string) {
  const url = `${this.baseUrl}/users/${id}`;
  return this.http.delete<any>(url);
  }

  createUser(userData: any) {
    const url = this.baseUrl + '/users';
    return this.http.post<any>(url, userData);
  }
}
