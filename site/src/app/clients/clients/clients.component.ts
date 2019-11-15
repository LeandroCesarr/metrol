import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {

  constructor() { }

  private organizerItems: Array<Object> = [
    {
      name: 'Nome',
      value: 'name'
    },
    {
      name: 'Data de criação',
      value: 'createdAt'
    },
    {
      name: 'Veículos',
      value: 'createdAt'
    }
  ]

  ngOnInit() {
  }

}
