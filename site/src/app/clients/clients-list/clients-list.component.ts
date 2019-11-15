import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html'
})
export class ClientsListComponent implements OnInit {

  constructor(private service: ClientService) { }
  private clients: any = [];

  ngOnInit() {
    this.getClients();
  }

  async getClients() {
    try {
      this.clients = await this.service.index();

    } catch (err) {
      this.clients[0] = err;
    }
  }

}
