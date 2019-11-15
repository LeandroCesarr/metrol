import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component'

@Component({
  selector: 'app-internal-controls',
  templateUrl: './internal-controls.component.html'
})
export class InternalControlsComponent implements OnInit {

  @Input() routerName: String;
  @Input() pageName: String;
  @Input() items: Array<Object>;
  @Input() organizerItems: Array<String>;
  @Input() filterItems: Array<String>;

  @Output() changedItems: EventEmitter<Array<Object>> = new EventEmitter();

  constructor(private bottomSheet: MatBottomSheet) { }

  private copyItems: Array<Object> = this.items;

  ngOnInit() {
  }

  async organizer() {
    const sheet = this.bottomSheet.open(BottomSheetComponent, {
      autoFocus: true,
      data: this.organizerItems
    })

    const response = await sheet.afterDismissed().toPromise();

    // this.items = this.items.sort((a: any, b: any) => {
    //   if (a[response] > b[response]) {
    //     return 1;
    // }

    // if (a[response] < b[response]) {
    //     return -1;
    // }

    // return 0;
    // })

    // console.log(this.items);

    // this.changedItems.emit(this.items);
  }

}
