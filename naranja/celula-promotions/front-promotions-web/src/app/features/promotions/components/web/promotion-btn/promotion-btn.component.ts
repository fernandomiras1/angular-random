import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promo-btn',
  templateUrl: './promotion-btn.component.html',
  styleUrls: ['./promotion-btn.component.scss'],
})
export class PromotionBtnComponent {
  @Input() btnText: string;

}
