import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../../services/client-service.service';

@Component({
  selector: 'app-client-service-list',
  templateUrl: './client-service-list.component.html',
})
export class ClientServiceListComponent implements OnInit {

  constructor(private service: ClientServiceService) { }
  private services: any = [];

  ngOnInit() {
    this.index();
  }

  async index() {
    try {
      this.services = await this.service.index();
    } catch (err) {
      this.services[0] = err;
    }
  }

}
