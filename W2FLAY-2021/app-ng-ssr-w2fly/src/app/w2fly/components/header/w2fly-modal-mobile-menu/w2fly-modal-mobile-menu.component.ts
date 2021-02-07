import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { SubMenuHeader } from '../../../model/header/header-dto'

@Component({
  selector: 'w2fly-modal-mobile-menu',
  templateUrl: './w2fly-modal-mobile-menu.component.html',
  styleUrls: ['./w2fly-modal-mobile-menu.component.scss'],
})
export class W2flyModalMobileMenuComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: SubMenuHeader[],
    private dialogRef: MatDialogRef<W2flyModalMobileMenuComponent>) { }

  public closeModal(): void {
    this.dialogRef.close()
  }
}
