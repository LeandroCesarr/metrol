import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ConfirmDlgComponent } from '../../ui/confirm-dlg/confirm-dlg.component'
import { MatDialog, MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-storage-list',
  templateUrl: './storage-list.component.html'
})
export class StorageListComponent implements OnInit {

  constructor(
    private productSrv: ProductService,
    private snack: MatSnackBar,
    private dialog: MatDialog,
  ) { }

    private displayedColumns: Array<String> = ['name', 'quantity', 'category', 'edit', 'delete'];
    private storages: any = [];
    private loading: boolean = false;

  ngOnInit() {
    this.index();
  }

  async index() {
    try {
      this.storages = await this.productSrv.index();
    } catch (err) {
      this.storages[0] = err;
    }
  }

  async delete(id: string) {
    try {
      let dialogRef = this.dialog.open(ConfirmDlgComponent, {
        width: '100%',
        data: { question: 'Deseja realmente excluir este produto ?' }
      });

      let result = await dialogRef.afterClosed().toPromise();

      if (result) {
        await this.productSrv.delete(id);
        this.snack.open('Produto excluido com sucesso!', 'Entendi', { duration: 3000 });
        this.ngOnInit();
      }
    } catch (err) {
      this.snack.open('Parece que algo deu errado.', 'Entendi' ,{ duration: 3000 })
    }
  }
}
