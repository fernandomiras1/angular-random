import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IBussinesRule } from '@app/core/models/bussines-rules.model';

@Component({
  selector: 'app-promo-horizontal-grid-web',
  templateUrl: './promo-horizontal-grid.component.html',
  styleUrls: ['./promo-horizontal-grid.component.scss'],
})
export class PromoHorizontalGridWebComponent {
  @Input() rule: any;
  @ViewChild('grid') grid: ElementRef;
  @ViewChild('leftArrow') leftArrow: ElementRef;
  @ViewChild('rightArrow') rightArrow: ElementRef;
  @Output() openRuleDetail = new EventEmitter<IBussinesRule>();
  constructor(
  ) { }

  emmitOpenRuleDetail() {
    this.openRuleDetail.emit(this.rule);
  }

  scroll(direction) {
    if (direction === 'right') {
      this.grid.nativeElement.scrollTo({
        left: this.grid.nativeElement.scrollLeft += 285 * 2,
      });
    } else {
      this.grid.nativeElement.scrollTo({
        left: this.grid.nativeElement.scrollLeft -= 285 * 2,
      });
    }
    setTimeout(
      () => {
        this.leftArrow.nativeElement.hidden = (this.grid.nativeElement.scrollLeft < 100);
        // tslint:disable-next-line: max-line-length
        this.rightArrow.nativeElement.hidden = (this.grid.nativeElement.scrollWidth - this.grid.nativeElement.scrollLeft - this.grid.nativeElement.offsetWidth <= 100);
      },
      500);
  }
}
