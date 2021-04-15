import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {

  @Output() close: EventEmitter<boolean> = new EventEmitter();
  @Input() isMobile = true;

  onClickOutside() {
    this.close.emit(true);
  }
}
