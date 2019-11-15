import { Component, OnInit, Input } from '@angular/core';
import { ClientServiceService } from '../../services/client-service.service';
@Component({
  selector: 'app-client-service-list',
  templateUrl: './client-service-list.component.html',
})
export class ClientServiceListComponent implements OnInit {

  @Input()
  onHome: boolean;

  constructor(
    private service: ClientServiceService,
  ) { }
  private services: any = [];
  private statusEnum: Array<string> = ['Ativo', 'Pausado', 'Finalizado']

  ngOnInit() {
    this.index();
  }

  async index() {
    try {
      this.services = await this.service.index();

      if (this.onHome) {
        this.services = this.services.filter((el: any) => el.status === 1)
      }
    } catch (err) {
      this.services[0] = err;
    }
  }

}
