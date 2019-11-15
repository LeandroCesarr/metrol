import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private service: LoginService,
    private cookie: CookieService,
    private snack: MatSnackBar
  ) { }

  user: any = {};
  loading: boolean = false

  ngOnInit() {
  }

  async login() {
    this.loading = true;

    try {
      const response = await this.service.auth(this.user);
      this.cookie.set('metrol_token', response['token'], 86400);
      this.router.navigate(['/']);
    } catch (err) {
      this.snack.open('Parece que algo deu errado', 'Entendi' ,{ duration: 3000 });
    }

    this.loading = false;
  }
}
