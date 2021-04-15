import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { IErrorStateData } from './error-state.model';
import { defaults } from '../../../../constants/default-elements';

@Component({
  selector: 'app-error-state-web',
  templateUrl: './error-state.component.html',
  styleUrls: ['./error-state.component.scss'],
})
export class ErrorStateWebComponent implements OnInit {

  public emptyIconUrl = defaults.EMPTY_ICON_URL;
  @Input() errorStateData: IErrorStateData;
  @Output() retryClicked: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {
    this.emptyIconUrl = defaults[this.errorStateData.errorIcon];
  }

  onClickButton() {
    this.retryClicked.emit(true);
  }
}
