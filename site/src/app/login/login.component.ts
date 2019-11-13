import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private service: LoginService,
    private cookie: CookieService
  ) { }

  user: any = {}

  ngOnInit() {
  }

  async login() {
    try {
      const response = await this.service.auth(this.user);
      this.cookie.set('metrol_token', response['token']);
      this.router.navigate(['dash']);
    } catch (err) {
      alert(err);
    }
  }
}
