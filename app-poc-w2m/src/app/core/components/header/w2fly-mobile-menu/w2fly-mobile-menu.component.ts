import {
  Component, EventEmitter, Input, Output,
} from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { HeaderDto, SubMenuHeader } from '../../../model/header/header-dto'
import { W2flyModalMobileMenuComponent } from '../w2fly-modal-mobile-menu/w2fly-modal-mobile-menu.component'

@Component({
  selector: 'w2fly-mobile-menu',
  templateUrl: './w2fly-mobile-menu.component.html',
  styleUrls: ['./w2fly-mobile-menu.component.scss'],
})
export class W2flyMobileMenuComponent {
  @Input() itemsMenu: HeaderDto[]

  @Output() closeClicked: EventEmitter<void> = new EventEmitter()

  constructor(public dialog: MatDialog) {}

  public openDialog(item: SubMenuHeader[]): void {
    this.dialog.open(W2flyModalMobileMenuComponent, {
      width: '100%',
      position: { bottom: '0' },
      maxWidth: '100%',
      maxHeight: '80vh',
      panelClass: 'container-custom-modal',
      data: item,
    })
  }
}
