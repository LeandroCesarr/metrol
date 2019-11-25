import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ClientServiceService } from '../../services/client-service.service';
import { ConfirmDlgComponent } from '../../ui/confirm-dlg/confirm-dlg.component'
import { MatDialog } from "@angular/material";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-client-service-highlight',
  templateUrl: './client-service-highlight.component.html'
})
export class ClientServiceHighlightComponent implements OnInit {

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private clientServiceSrv: ClientServiceService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
  ) { }

  private id: string;
  private data: any = {};

  ngOnInit() {
    this.getClientService();
  }

  async delete(id: string) {
    try {
      let dialogRef = this.dialog.open(ConfirmDlgComponent, {
        width: '100%',
        data: { question: 'Deseja realmente excluir este serviço ?' }
      });

      let result = await dialogRef.afterClosed().toPromise();

      if (result) {
        await this.clientServiceSrv.delete(id);
        this.snack.open('Serviço excluido com sucesso!', 'Entendi', { duration: 3000 });
        this.router.navigate(['/services'])
      }
    } catch (err) {
      this.snack.open('Parece que algo deu errado.', 'Entendi' ,{ duration: 3000 })
    }
  }

  async getClientService() {
    const params = this.actRoute.snapshot.params;

    if (params['id']) {
      this.id = params['id'];

      this.data = await this.clientServiceSrv.indexOf(this.id);
    } else {
      this.router.navigate(['/services'])
    }
  }

  async finish() {
    this.data.status = 3;

    try {
      let dialogRef = this.dialog.open(ConfirmDlgComponent, {
        width: '100%',
        data: { question: 'Deseja realmente finalizar este serviço ?' }
      });

      let result = await dialogRef.afterClosed().toPromise();

      if (result) {
        await this.clientServiceSrv.update(this.data);
        this.snack.open('Serviço finalizado com sucesso!', 'Entendi', { duration: 3000 });
        this.router.navigate(['/services'])
      }
    } catch (err) {
      this.snack.open('Parece que algo deu errado.', 'Entendi' ,{ duration: 3000 })
    }
  }

}
