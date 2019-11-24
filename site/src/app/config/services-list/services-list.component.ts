import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ConfirmDlgComponent } from '../../ui/confirm-dlg/confirm-dlg.component'
import { MatDialog, MatSnackBar } from "@angular/material";


@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html'
})
export class ServicesListComponent implements OnInit {

  constructor(
    private serviceSrv: ServiceService,
    private snack: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  private services: any = [];

  ngOnInit() {
    this.getServices()
  }

  async getServices() {
    try {
      this.services = await this.serviceSrv.index();

    } catch (err) {
      this.services[0] = err;
    }
  }

  async delete(id: string) {
    try {
      let dialogRef = this.dialog.open(ConfirmDlgComponent, {
        width: '100%',
        data: { question: 'Deseja realmente excluir este serviço ?' }
      });

      let result = await dialogRef.afterClosed().toPromise();

      if (result) {
        await this.serviceSrv.delete(id);
        this.snack.open('Serviço excluido com sucesso!', 'Entendi', { duration: 3000 });
        this.ngOnInit();
      }
    } catch (err) {
      this.snack.open('Parece que algo deu errado.', 'Entendi' ,{ duration: 3000 })
    }
  }

}
