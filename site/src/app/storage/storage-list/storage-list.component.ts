import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-storage-list',
  templateUrl: './storage-list.component.html'
})
export class StorageListComponent implements OnInit {

  @Input()
  onHome: boolean;
  storageId: string;

  constructor(
    private storage: ProductService,
  ) { }
    private storages: any = [];
    private statusEnum: Array<string> = ['Ativo', 'Pausado', 'Finalizado'];

  ngOnInit() {
    this.index();
  }

  async index() {
    try {
      this.storages = await this.storage.index();
    } catch (err) {
        this.storages[0] = err;
      }
    }

}
