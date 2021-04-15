import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-modal',
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.css'],
})
export class ChatModalComponent {

  public visible = false;
  @Output() dismissModal = new EventEmitter<void>();

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
    this.dismissModal.emit();
  }
}
