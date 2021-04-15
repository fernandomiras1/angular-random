import { EventEmitter, Input, OnInit, Output } from '@angular/core';

export class InfoChipsComponentBase implements OnInit {

  @Input() type: string;
  @Input() data: string[] = [];
  @Output() close: EventEmitter<string> = new EventEmitter();
  @Output() edit: EventEmitter<string> = new EventEmitter();

  public textData: string;
  public moreData = 0;

  constructor() { }

  ngOnInit() {
    this.processChipsData();
  }

  processChipsData() {
    this.textData = this.data[0];

    if (this.type === 'categories') {
      this.moreData = this.data.length - 1;
    }
  }

  onClose() {
    this.close.emit(this.type);
  }

  onEdit() {
    this.edit.emit();
  }
}
