import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ConfirmDlgComponent } from '../../ui/confirm-dlg/confirm-dlg.component'
import { MatDialog, MatSnackBar } from "@angular/material";


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html'
})
export class ClientsListComponent implements OnInit {

  constructor(
    private service: ClientService,
    private snack: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  clients: any = [];
  loading: boolean = false;

  ngOnInit() {
    this.getClients();
  }

  async getClients() {
    try {
      this.clients = await this.service.index();

    } catch (err) {
      this.snack.open('Parece que algo deu errado', 'Entendi' ,{ duration: 3000 });
    }
  }

  async delete(id: string) {
    try {
      let dialogRef = this.dialog.open(ConfirmDlgComponent, {
        width: '100%',
        data: { question: 'Deseja realmente excluir este cliente ?' }
      });

      let result = await dialogRef.afterClosed().toPromise();

      if (result) {
        await this.service.delete(id);
        this.snack.open('Cliente excluido com sucesso!', 'Entendi', { duration: 3000 });
        this.ngOnInit();
      }
    } catch (err) {
      this.snack.open('Parece que algo deu errado.', 'Entendi' ,{ duration: 3000 })
    }
  }

}
