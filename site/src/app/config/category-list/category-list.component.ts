import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ConfirmDlgComponent } from '../../ui/confirm-dlg/confirm-dlg.component'
import { MatDialog, MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {

  constructor(
    private categorySrv: CategoryService,
    private snack: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  private categories: any = [];
  private loading: boolean = false;

  ngOnInit() {
    this.getCategories();
  }

  async getCategories() {
    try {
      this.categories = await this.categorySrv.index();
    } catch (err) {

      this.categories[0] = err;
    }
  }

  async delete(id: string) {
    try {
      let dialogRef = this.dialog.open(ConfirmDlgComponent, {
        width: '100%',
        data: { question: 'Deseja realmente excluir esta categoria ?' }
      });

      let result = await dialogRef.afterClosed().toPromise();

      if (result) {
        await this.categorySrv.delete(id);
        this.snack.open('Categoria excluida com sucesso!', 'Entendi', { duration: 3000 });
        this.ngOnInit();
      }
    } catch (err) {
      this.snack.open('Parece que algo deu errado.', 'Entendi' ,{ duration: 3000 })
    }
  }
}