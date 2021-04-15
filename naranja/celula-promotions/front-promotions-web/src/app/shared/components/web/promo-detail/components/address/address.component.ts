import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IPromo } from '@core/models/promo.model';
import { CommonService } from '@shared/services/common.service';

@Component({
  selector: 'app-address-web',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressWebComponent implements OnInit {
  @Input() promo: IPromo;
  @Input() addresses;
  @Input() showMore;
  @Input() isOnline;
  @Input() promoSelected;
  @Input() moreLocalsFinished;

  @Output() clickMoreLocals: EventEmitter<any> = new EventEmitter();
  protected webPageShowed: string;
  protected webPageLink: string;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.webPageShowed = this.truncateWebPage(this.promo.webPage);
    // tslint:disable-next-line: max-line-length
    this.webPageLink =  this.promo.webPage.startsWith('http://') || this.promo.webPage.startsWith('https://')  ? this.promo.webPage : `//${this.promo.webPage}`;
  }

  truncateWebPage = (input) => {
    return input.length > 35 ? `${input.substring(0, 35)}...` : input;
  }

  moreLocals() {
    this.commonService.changeStyleBodyFixed('add');
    this.clickMoreLocals.emit();
  }
}
