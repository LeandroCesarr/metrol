import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html'
})
export class CategoryFormComponent implements OnInit {

  constructor(
    private snack: MatSnackBar,
    private router: Router,
    private actRoute: ActivatedRoute,
    private categorySrv: CategoryService,
  ) { }

  private title: string = 'Nova categoria de produto'
  private category: any = {};
  private loading: boolean = false;
  private responseMsg: string = '';

  async ngOnInit() {
    const params = this.actRoute.snapshot.params;
    if (params['id']) {
      this.loading = true;
      try {
        this.category = await this.categorySrv.indexOf(params['id']);
        this.title = `Editando categoria: ${this.category._id}`;
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
        await this.categorySrv[this.category._id ? 'update': 'create'](this.category)
        this.responseMsg = this.category._id ? 'Categoria de produto criada com sucesso!':'Categoria de produto atualizada com sucesso!';
        this.snack.open(this.responseMsg, 'Entendi', { duration: 3000 });

        this.router.navigate(['/config'])
      } catch (err) {
        this.snack.open('Parece que algo deu errado, os dados nao foram salvos', 'Entendi' ,{ duration: 3000 })
      }

      this.loading = false;
    }
  }
}
