import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ServiceService } from '../../services/service.service';
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import * as moment from 'moment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-storage-form',
  templateUrl: './storage-form.component.html'
})
export class StorageFormComponent implements OnInit {

  constructor(
    private storageSrv: ProductService,
    private serviceSrv: ServiceService, 
    private router: Router,
    private actRoute: ActivatedRoute,
    private snack: MatSnackBar,
  ) { }

  private title: string = 'Novo Produto';
  private storageService: any = {};
  private storages: any = [];
  private loading: boolean = false;
  private responseMsg: string = '';

  async ngOnInit() {
    this.getProducts();
    
    const params = this.actRoute.snapshot.params;
    if (params['id']) {
      this.loading = true;
      try {
        this.storageService = await this.storageService.index();
        this.title = `Editando: #${this.storageService._id}`;
      } catch (err) {
        this.snack.open('Parece que algo deu errado', 'Entendi', { duration: 3000});
      }
      this.loading = false;
    }
  }

  async getProducts() {
    this.storages = await this.storageSrv.index();
  }
  
   async submit(form: NgForm) {
    const params = this.actRoute.snapshot.params;

    if (form.valid) {
      this.loading = true;
      this.storageService.delivery_date = moment(this.storageService.delivery_date).format();

      try {
        await this.storageService[this.storageService._id ? 'update': 'create'](this.storageService)
        this.responseMsg = this.storageService._id ? 'Serviço atualizado com sucesso!': 'Serviço criado com sucesso!';
        this.snack.open(this.responseMsg, 'Entendi', { duration: 3000 });

        if (!params['id']) {
          this.router.navigate(['/product'])
        } else {
          this.router.navigate([`/product/${params['id']}`])
        }

      } catch (err) {
        this.snack.open('Parece que algo deu errado, os dados nao foram salvos', 'Entendi' ,{ duration: 3000 })
      }

      this.loading = false;
    }
  }

}
