import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef, } from '@angular/material';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html'
})
export class BottomSheetComponent implements OnInit {

  constructor(
      @Inject(MAT_BOTTOM_SHEET_DATA) public data: Array<Object>,
      private bottomSheetReef: MatBottomSheetRef<BottomSheetComponent>
    ) { }

  ngOnInit() {
  }

  emitValue(value) {
    this.bottomSheetReef.dismiss(value);
  }

}
