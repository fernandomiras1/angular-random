import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';

@Component({
  selector: 'app-filter-web',
  templateUrl: './filter-web.component.html',
  styleUrls: ['./filter-web.component.scss'],
})
export class FilterWebComponent {
  @Output() closeFilters: EventEmitter<boolean> = new EventEmitter();
  @Output() filtersApplied: EventEmitter<any> = new EventEmitter();

  @Input() showFilters: Boolean = false;
  @Input() categoriesFiltered;
  @Input() provinceFiltered: string;
  @Input() localityFiltered: string;
  @Input() commerceNameFiltered: string;

  @ViewChild(FilterDialogComponent) filterComponent: FilterDialogComponent;

  close() {
    this.filterComponent.checkNavigationData();
    this.closeFilters.emit(false);
  }

  clickOverlay() {
    this.showFilters = false;
    this.close();
  }

  sendFiters(event) {
    this.filtersApplied.emit(event);
  }
}
