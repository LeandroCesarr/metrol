import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }
  private entryPoint: string = `${env.apiBaseURL}vehicle`;

  index() {
    return this.http.get(this.entryPoint).toPromise();
  }
}
