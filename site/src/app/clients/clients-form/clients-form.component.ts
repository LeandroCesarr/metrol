import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material";
import { VehicleService } from '../../services/vehicle.service';
import { ClientService } from '../../services/client.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html'
})
export class ClientsFormComponent implements OnInit {

  constructor(
    private vehicleSrv: VehicleService,
    private clientSrv: ClientService,
    private snack: MatSnackBar,
    private router: Router,
  ) { }

  client: Object = {};
  title: String = 'Novo cliente';
  vehicles: any = [];
  responseMsg: string = '';
  loading: boolean = false;

  ngOnInit() {
    this.getVehicles();
  }

  async getVehicles() {
    try {
      this.vehicles = await this.vehicleSrv.index();
    } catch (err) {
      this.snack.open('Parece que algo deu errado', 'Entendi' ,{ duration: 3000 });
    }
  }

  async submit(form: NgForm) {
    if (form.valid) {
      this.loading = true;

      try {
        await this.clientSrv.create(this.client)
        this.responseMsg = 'Client criado com sucesso!';
        this.snack.open(this.responseMsg, 'Entendi', { duration: 3000 });

        this.router.navigate(['/client'])
      } catch (err) {
        this.snack.open('Parece que algo deu errado, os dados nao foram salvos', 'Entendi' ,{ duration: 3000 })
      }

      this.loading = false;
    }
  }

}