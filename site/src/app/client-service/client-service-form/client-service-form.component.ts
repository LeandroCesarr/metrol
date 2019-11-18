import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-client-service-form',
  templateUrl: './client-service-form.component.html'
})
export class ClientServiceFormComponent implements OnInit {

  constructor(
    private datePipe: DatePipe,
    private clientSrv: ClientService,
  ) { }

  private title: string = 'Novo serviço'
  private service: any = {};
  private clients: any = [];
  private status: Array<Object> = [];
  private status_payment: Array<Object> = [];
  private formControl: FormControl = new FormControl();

  ngOnInit() {
    this.getClients();
  }

  // convertDate(value: any) {
  //   console.log(this.datePipe.transform(value.target.value, 'yy-MM-dd'));
  //   this.service.delivery_date = this.datePipe.transform(value.target.value, 'yy-MM-dd');
  // }

  async getClients() {
    this.clients = await this.clientSrv.index();
  }

  // submit() {

  // }

}
