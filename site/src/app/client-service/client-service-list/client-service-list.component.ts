import { Component, OnInit, Input } from '@angular/core';
import { ClientServiceService } from '../../services/client-service.service';
import { MatSnackBar } from "@angular/material";
@Component({
  selector: 'app-client-service-list',
  templateUrl: './client-service-list.component.html',
})
export class ClientServiceListComponent implements OnInit {

  @Input()
  onHome: boolean;
  serviceId: string;

  constructor(
    private service: ClientServiceService,
    private snack: MatSnackBar,
  ) { }
  private services: any = [];
  private statusEnum: Array<string> = ['Ativo', 'Pausado', 'Finalizado'];

  ngOnInit() {
    this.index();
  }

  async index() {
    try {
      this.services = await this.service.index();

      if (this.onHome) {
        this.services = this.services.filter((el: any) => el.status === 1)
      }

      if (this.serviceId) {
        this.services = this.services.filter((el: any) => el.client._id === this.serviceId)
      }
    } catch (err) {
      this.snack.open('Parece que algo deu errado, os dados nao foram salvos', 'Entendi' ,{ duration: 3000 })
    }
  }

}
