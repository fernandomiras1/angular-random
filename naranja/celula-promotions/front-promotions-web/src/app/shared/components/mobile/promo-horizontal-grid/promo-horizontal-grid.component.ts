import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IBussinesRule } from '@app/core/models/bussines-rules.model';

@Component({
  selector: 'app-promo-horizontal-grid-mobile',
  templateUrl: './promo-horizontal-grid.component.html',
  styleUrls: ['./promo-horizontal-grid.component.scss'],
})
export class PromoHorizontalGridMobileComponent {
  @Input() rule: IBussinesRule;
  @Output() openRuleDetail = new EventEmitter<IBussinesRule>();
  constructor() { }

  emmitOpenRuleDetail() {
    this.openRuleDetail.emit(this.rule);
  }

}
