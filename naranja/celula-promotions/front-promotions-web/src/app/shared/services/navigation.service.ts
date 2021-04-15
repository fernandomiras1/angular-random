import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as fromActionsHistoryNavigation from '../../core/navigation/store/history-navigation/history-navigation.actions';
import { HistoryNavigationState } from '../../core/navigation/store/history-navigation/history-navigation.reducer';
import * as fromSelectorHistoryNavigation from '../../core/navigation/store/history-navigation/history-navigation.selectors';
import { environment } from '../../../environments/environment';
import { NavigatorService } from '@core/utils/services/navigator.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private historyData: HistoryNavigationState;
  private subjectShowArrow = new BehaviorSubject(false);

  public showArrow$ = this.subjectShowArrow.asObservable();

  constructor(
    private router: Router,
    private historyNavigationStore: Store<HistoryNavigationState>,
    private navigatorService: NavigatorService,
  ) {
    if (this.navigatorService.isBrowser) {
      this.historyNavigationStore.dispatch(
        new fromActionsHistoryNavigation.SavePreviousLink(`${location.protocol}//${location.host}`));

      this.historyNavigationStore
        .select(fromSelectorHistoryNavigation.selectData)
        .pipe(filter(val => !!val))
        .subscribe((data) => {
          this.historyData = data;
          return this.subjectShowArrow.next(this.showArrowButton());
        });
    }
  }

  saveHistoryNavigation(url: string): void {
    this.historyNavigationStore.dispatch(new fromActionsHistoryNavigation.SaveData(url));
  }

  goBack() {
    const lastUrl = this.historyData.urlRoute.pop();
    const isHomePage = (lastUrl === '/cerca-tuyo' || lastUrl === '/todas' || lastUrl === '/');
    const isFirstNavigation = this.historyData.urlRoute.length === 0;

    if (isFirstNavigation || isHomePage) {
      return this.exit();
    }

    if (this.historyData && this.historyData.urlRoute.length > 0) {
      const previousUrlRoute = this.historyData.urlRoute.pop();
      if (!previousUrlRoute.includes('callback')) {
        if (lastUrl.includes('/promo/') && previousUrlRoute.includes('/cerca-tuyo')) { // estoy volviendo del detalle al mapa
          localStorage.setItem('NfromDetailToMap' , 'true'); // guardo en localstorage el flag
        } else {
          localStorage.removeItem('NfromDetailToMap'); // en cualquier otro caso, lo quito
        }
        return this.router.navigate([previousUrlRoute]);
      }
    }
    return this.router.navigate(['']);
  }

  exit() {
    window.open(environment.contentful.BASE_URL_WEB, '_self');
  }

  private showArrowButton() {
    const lastUrl = this.historyData.urlRoute[this.historyData.urlRoute.length - 1];
    const isHomePage = (lastUrl === '/cerca-tuyo' || lastUrl === '/todas' || lastUrl === '/');
    const isFirstNavigation = this.historyData.urlRoute.length === 1;

    if (isFirstNavigation || isHomePage) {
      return false;
    }

    return true;
  }
}
