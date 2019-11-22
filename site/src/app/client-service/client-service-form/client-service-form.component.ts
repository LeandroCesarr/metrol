import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ServiceService } from '../../services/service.service';
import { ClientServiceService } from '../../services/client-service.service';
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import * as moment from 'moment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-service-form',
  templateUrl: './client-service-form.component.html'
})
export class ClientServiceFormComponent implements OnInit {

  constructor(
    private clientSrv: ClientService,
    private serviceSrv: ServiceService,
    private clientServiceSrv: ClientServiceService,
    private snack: MatSnackBar,
    private router: Router,
    private actRoute: ActivatedRoute,
  ) { }

  private title: string = 'Novo serviço'
  private clientService: any = {};
  private clients: any = [];
  private services: any = [];
  private loading: boolean = false;
  private responseMsg: string = '';

  async ngOnInit() {
    this.getClients();
    this.getServices();

    const params = this.actRoute.snapshot.params;
    if (params['id']) {
      this.loading = true;
      try {
        this.clientService = await this.clientServiceSrv.indexOfNp(params['id']);
        this.title = `Editando: #${this.clientService._id}`;
      } catch (err) {
        this.snack.open('Parece que algo deu errado', 'Entendi' ,{ duration: 3000 });
      }
      this.loading = false;
    }
  }

  async getClients() {
    this.clients = await this.clientSrv.index();
  }

  async getServices() {
    this.services = await this.serviceSrv.index();
  }

  async submit(form: NgForm) {
    const params = this.actRoute.snapshot.params;

    if (form.valid) {
      this.loading = true;
      this.clientService.delivery_date = moment(this.clientService.delivery_date).format();

      try {
        await this.clientServiceSrv[this.clientService._id ? 'update': 'create'](this.clientService)
        this.responseMsg = this.clientService._id ? 'Serviço atualizado com sucesso!': 'Serviço criado com sucesso!';
        this.snack.open(this.responseMsg, 'Entendi', { duration: 3000 });

        if (!params['id']) {
          this.router.navigate(['/services'])
        } else {
          this.router.navigate([`/services/${params['id']}`])
        }

      } catch (err) {
        this.snack.open('Parece que algo deu errado, os dados nao foram salvos', 'Entendi' ,{ duration: 3000 })
      }

      this.loading = false;
    }
  }
}
