import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { VehicleService } from '../../services/vehicle.service';
import { ClientService } from '../../services/client.service';
import { NgForm } from '@angular/forms';

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
    private actRoute: ActivatedRoute,
  ) { }

  client: any = {};
  title: String = 'Novo cliente';
  vehicles: any = [];
  responseMsg: string = '';
  loading: boolean = false;

  async ngOnInit() {
    this.getVehicles();

    const params = this.actRoute.snapshot.params;
    if (params['id']) {
      this.loading = true;
      try {
        this.client = await this.clientSrv.indexOf(params['id']);
        this.title = `Editando: ${this.client.name}`;
      } catch (err) {
        this.snack.open('Parece que algo deu errado', 'Entendi' ,{ duration: 3000 });
      }
      this.loading = false;
    }
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
        await this.clientSrv[this.client._id ? 'update': 'create'](this.client)
        this.responseMsg = this.client._id ? 'Cliente criado com sucesso!':'Cliente atualizado com sucesso!';
        this.snack.open(this.responseMsg, 'Entendi', { duration: 3000 });

        this.router.navigate(['/clients'])
      } catch (err) {
        this.snack.open('Parece que algo deu errado, os dados nao foram salvos', 'Entendi' ,{ duration: 3000 })
      }

      this.loading = false;
    }
  }
}