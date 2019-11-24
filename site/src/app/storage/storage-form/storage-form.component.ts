import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-storage-form',
  templateUrl: './storage-form.component.html'
})
export class StorageFormComponent implements OnInit {

  constructor(
    private storageSrv: ProductService,
    private categorySrv: CategoryService, 
    private router: Router,
    private actRoute: ActivatedRoute,
    private snack: MatSnackBar,
  ) { }

  private title: string = 'Novo Produto';
  private storage: any = {};
  private categories: any = [];
  private loading: boolean = false;
  private responseMsg: string = '';

  async ngOnInit() {
    this.getCategories();
    
    const params = this.actRoute.snapshot.params;
    if (params['id']) {
      this.loading = true;
      try {
        this.storage = await this.storageSrv.indexOfNp(params['id']);
        this.title = `Editando: #${this.storage._id}`;
      } catch (err) {
        this.snack.open('Parece que algo deu errado', 'Entendi', { duration: 3000});
      }
      this.loading = false;
    }
  }

  async getCategories() {
    this.categories = await this.categorySrv.index();
  }
  
   async submit(form: NgForm) {
    const params = this.actRoute.snapshot.params;

    if (form.valid) {
      this.loading = true;

      try {
        await this.storageSrv[this.storage._id ? 'update': 'create'](this.storage)
        this.responseMsg = this.storage._id ? 'Serviço atualizado com sucesso!': 'Serviço criado com sucesso!';
        this.snack.open(this.responseMsg, 'Entendi', { duration: 3000 });

        this.router.navigate(['/storage'])

      } catch (err) {
        this.snack.open('Parece que algo deu errado, os dados nao foram salvos', 'Entendi' ,{ duration: 3000 })
      }

      this.loading = false;
    }
  }

}
