import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  private entryPoint: string = `${env.apiBaseURL}user/login`;

  async auth(user) {
    return this.http.post(this.entryPoint, user).toPromise();
  }
}
