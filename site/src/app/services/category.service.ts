import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  private entryPoint: string = `${env.apiBaseURL}category`;

  index() {
    return this.http.get(this.entryPoint).toPromise();
  }

  indexOf(id: string) {
    return this.http.get(`${this.entryPoint}/${id}`).toPromise();
  }

  create(category: any) {
    return this.http.post(this.entryPoint, category).toPromise();
  }

  delete(id: any) {
    return this.http.request('delete', this.entryPoint, {
      body: { _id: id }
    }).toPromise();
  }
}
