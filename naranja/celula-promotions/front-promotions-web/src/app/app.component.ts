import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { GtmService } from '@core/utils/services/gtm.service';
import { ScriptLoaderService } from '@core/utils/services/script-loader.service';
import { NavigationService } from '@shared/services/navigation.service';
import { isPlatformBrowser } from '@angular/common';
import { NavigationState } from './core/navigation/store/navigation.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public analyticsSubscription: Subscription;

  constructor(
    private translate: TranslateService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
    private scriptLoader: ScriptLoaderService,
    private gtmService: GtmService,
    private navigationService: NavigationService,
    private navigationStore: Store<NavigationState>,
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setLanguage();
      this.loadScripts();
      this.loadChatS1();
      this.saveActualRoute();
    }
  }

  onNavigate(url) {
    this.router.navigate([`${url}`]);
  }

  // TODO: Revisar si lo obtenemos de la session, browser, server ?
  public getLang(): string {
    return 'es'; //
  }

  public switchLanguage(lang: string): void {
    this.translate.setDefaultLang(lang);
  }

  loadScripts() {
    this.gtmService.gtmScriptLoad(environment.gtmId.COM);
  }

  loadChatS1() {
    const s1 = document.createElement('script');
    s1.src = 'https://deelo.s1gateway.com/pe/d576601d2711d6dda89a4446a8ff3266cc32ceca7ba6da7619ad62ec57d5fa5e0b9ae5ffc686cd06';
    s1.type = 'text/javascript';
    s1.defer = true;
    document.getElementsByTagName('head')[0].appendChild(s1);
  }

  private setLanguage(): void {
    const language = this.getLang();
    if (['en'].indexOf(language) > -1) {
      this.translate.setDefaultLang(language);
    } else {
      this.translate.setDefaultLang('es');
    }
  }

  private saveActualRoute(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.navigationService.saveHistoryNavigation(e.url);
      });
  }
}
