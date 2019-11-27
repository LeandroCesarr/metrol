import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../../services/client-service.service';
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients-highlight',
  templateUrl: './clients-highlight.component.html'
})
export class ClientsHighlightComponent implements OnInit {

  constructor(
    private clientServiceSrv: ClientServiceService,
    private clientSrv: ClientService,
    private snack: MatSnackBar,
    private router: Router,
    private actRoute: ActivatedRoute,
  ) { }

  private client: any = {};
  private services: any = [];
  private statusEnum: Array<string> = ['Ativo', 'Pausado', 'Finalizado'];
  private loading: Boolean = false;

  ngOnInit() {
    this.getClient();
  }

  async getClient() {
    const params = this.actRoute.snapshot.params;

    if (params['id']) {
      this.loading = true;
      try {
        this.client = await this.clientSrv.indexOf(params['id']);
        this.services = await this.clientServiceSrv.indexOfId(params['id']);
      } catch (err) {
        this.snack.open('Parece que algo deu errado', 'Entendi' ,{ duration: 3000 });
      }
      this.loading = false;
    }
  }

}
