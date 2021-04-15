import { EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { defaults } from '../../../../constants/default-elements';
import { NavigationService } from '../../../services/navigation.service';

export abstract class NavbarComponentBase {
  @Input() title: string;
  @Input() showTitle = false;
  @Input() showMenuButton = true;
  @Input() shadow = false;
  @Input() filter = false;
  @Input() fixed = true;
  @Output() openFilter = new EventEmitter<boolean>();

  public filterIcon = defaults.FILTER_ICON_URL;
  public nIcon = defaults.NAVIGATION_ICON;
  public isShowingArrowButton$: Observable<boolean>;

  constructor(protected navigationService: NavigationService) {
    this.isShowingArrowButton$ = this.navigationService.showArrow$;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
    if (this.fixed) {
      const scrollOffset = $event.srcElement.children[0].scrollTop;
      this.shadow = (scrollOffset > 48);
    }
  }

  @HostListener('window:popstate', ['$event'])
  onPopState($event) {
    this.navigationService.goBack();
  }

  onOpenFilter() {
    this.openFilter.emit(true);
  }

  goBack() {
    this.navigationService.goBack();
  }
}
