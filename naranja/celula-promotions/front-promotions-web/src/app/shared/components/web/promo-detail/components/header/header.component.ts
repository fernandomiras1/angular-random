import { Component, Input, OnInit } from '@angular/core';
import { ITag } from '@app/core/models/tag.model';

import { IPromo } from '../../../../../../core/models/promo.model';

@Component({
  selector: 'app-header-web',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderWebComponent implements OnInit {
  @Input() promo: IPromo;
  @Input() promoIcon;
  @Input() logoUrl;
  @Input() defaultLogo;
  @Input() title: string;
  @Input() emptyIcon: string;
  @Input() subtitle: string;
  @Input() tag: ITag;
  ngOnInit() {
  }
}
