import { Component, Output, EventEmitter } from '@angular/core';
import { defaults } from '../../../../constants/default-elements';

@Component({
  selector: 'app-error-state',
  templateUrl: './error-state.component.html',
  styleUrls: ['./error-state.component.scss'],
})
export class ErrorStateComponent {

  public emptyIconUrl = defaults.EMPTY_ICON_URL;
  @Output() retryClicked: EventEmitter<boolean> = new EventEmitter();

  onClickButton() {
    this.retryClicked.emit(true);
  }
}
