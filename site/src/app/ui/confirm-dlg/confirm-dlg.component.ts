import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  question: string;
}

@Component({
  selector: 'app-confirm-dlg',
  templateUrl: './confirm-dlg.component.html'
})
export class ConfirmDlgComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
  }

}