import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  private entryPoint: string = `${env.apiBaseURL}service`;

  index() {
    return this.http.get(this.entryPoint).toPromise();
  }

  indexOf(id: string) {
    return this.http.get(`${this.entryPoint}/${id}`).toPromise();
  }

  create(service: Object) {
    return this.http.post(this.entryPoint, service).toPromise();
  }

  update(service: Object) {
    return this.http.put(this.entryPoint, service).toPromise();
  }

  delete(id: any) {
    return this.http.request('delete', this.entryPoint, {
      body: {_id: id }
    }).toPromise();
  }
}
