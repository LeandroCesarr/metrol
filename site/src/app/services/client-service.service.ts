import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) { }
  private entryPoint: string = `${env.apiBaseURL}client-service`;

  index() {
    return this.http.get(this.entryPoint).toPromise();
  }

  indexOf(id: string) {
    return this.http.get(`${this.entryPoint}/${id}`).toPromise();
  }

  indexOfId(id: string) {
    return this.http.get(`${this.entryPoint}/client/${id}`).toPromise();
  }

  indexOfNp(id: string) {
    return this.http.get(`${this.entryPoint}/np/${id}`).toPromise();
  }

  create(user: any) {
    return this.http.post(this.entryPoint, user).toPromise();
  }

  update(user: any) {
    return this.http.put(this.entryPoint, user).toPromise();
  }

  delete(id: any) {
    return this.http.request('delete', this.entryPoint, {
      body: { _id: id }
    }).toPromise();
  }
}
