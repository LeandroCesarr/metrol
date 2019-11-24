import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html'
})
export class ServiceFormComponent implements OnInit {

  constructor(
    private snack: MatSnackBar,
    private router: Router,
    private actRoute: ActivatedRoute,
    private serviceSrv: ServiceService,
  ) { }

  service: any = {};
  title: String = 'Novo cliente';
  responseMsg: string = '';
  loading: boolean = false;

  async ngOnInit() {
    const params = this.actRoute.snapshot.params;
    if (params['id']) {
      this.loading = true;
      try {
        this.service = await this.serviceSrv.indexOf(params['id']);
        this.title = `Editando: ${this.service.name}`;
      } catch (err) {
        this.snack.open('Parece que algo deu errado', 'Entendi' ,{ duration: 3000 });
      }
      this.loading = false;
    }
  }

  async submit(form: NgForm) {
    if (form.valid) {
      this.loading = true;

      try {
        await this.serviceSrv[this.service._id ? 'update': 'create'](this.service)
        this.responseMsg = this.service._id ? 'Serviço prestado criado com sucesso!':'Serviço prestado atualizado com sucesso!';
        this.snack.open(this.responseMsg, 'Entendi', { duration: 3000 });

        this.router.navigate(['/config'])
      } catch (err) {
        this.snack.open('Parece que algo deu errado, os dados nao foram salvos', 'Entendi' ,{ duration: 3000 })
      }

      this.loading = false;
    }
  }

}
