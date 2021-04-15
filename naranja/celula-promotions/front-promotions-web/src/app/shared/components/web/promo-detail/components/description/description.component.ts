import { Component, Input } from '@angular/core';
import { IPromo } from '../../../../../../core/models/promo.model';

@Component({
  selector: 'app-description-web',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionWebComponent {
  @Input() promo: IPromo;
  @Input() counterData;
  @Input() showDates: boolean;
}
