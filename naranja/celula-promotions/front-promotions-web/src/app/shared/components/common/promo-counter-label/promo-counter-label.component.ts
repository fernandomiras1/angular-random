import { Component, Input } from '@angular/core';
import { IPromo } from '@core/models/promo.model';

@Component({
  selector: 'app-promo-counter-label',
  templateUrl: './promo-counter-label.component.html',
})
export class PromoCounterLabelComponent {

  @Input() isFilterApply: boolean;
  @Input() promosRendered: IPromo[];
  @Input() promosCount: number;

  constructor() { }
}
