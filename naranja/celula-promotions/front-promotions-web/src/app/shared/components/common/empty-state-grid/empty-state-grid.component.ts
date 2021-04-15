import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmptyStateData } from './empty-state.model';
import { defaults } from '../../../../constants/default-elements';

@Component({
  selector: 'app-empty-state-grid',
  templateUrl: './empty-state-grid.component.html',
  styleUrls: ['./empty-state-grid.component.scss'],
})
export class EmptyStateGridComponent implements OnInit {

  public emptyIconUrl = defaults.GRID_EMPTY_ICON_URL;
  public emptyTitle = 'SHARED_COMPONENTS.EMPTY_STATE.TITLE';
  public emptySubtitle = 'SHARED_COMPONENTS.EMPTY_STATE.SUBTITLE';
  public emptyBtn = 'Revisar filtros';
  @Input() showOpenFilterButton = true;
  @Input() emptyStateData: IEmptyStateData;
  @Output() showFilter: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.emptyStateData) {
      if (this.emptyStateData.emptyIcon) {
        this.emptyIconUrl = defaults[this.emptyStateData.emptyIcon];
      }
      if (this.emptyStateData.emptyTitle) {
        this.emptyTitle = this.emptyStateData.emptyTitle;
      }
      if (this.emptyStateData.emptySubtitle) {
        this.emptySubtitle = this.emptyStateData.emptySubtitle;
      }
      if (this.emptyStateData.emptyBtn) {
        this.emptyBtn = this.emptyStateData.emptyBtn;
      }

    }
  }

  onClickButton() {
    this.showFilter.emit(true);
  }

}
