import {
  Injectable, Optional, Inject, PLATFORM_ID,
} from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { REQUEST } from '@nguniversal/express-engine/tokens'
import { isPlatformBrowser } from '@angular/common'
import { Observable, ReplaySubject } from 'rxjs'
import { Language } from '../model/language-dto'

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  public readonly defaultLanguage = 'es'

  public readonly allowedLanguages: Language[] = [
    {
      code: 'en',
      name: 'Inglés',
    },
    {
      code: 'es',
      name: 'Español',
    },
    {
      code: 'pt',
      name: 'Portugués',
    },
  ]

  public readonly language = this.getLanguage()

  private readonly languageCatalog: ReplaySubject<Language[]> = new ReplaySubject<Language[]>()

  constructor(
      private translate: TranslateService,
      @Optional() @Inject(REQUEST) private req: Request,
      @Inject(PLATFORM_ID) private platform: string,
  ) {
    this.languageCatalog.next(this.allowedLanguages)
  }

  init(): Promise<any> {
    return new Promise((resolve: Function) => {
      this.translate.addLangs(this.allowedLanguages.map(lang => lang.code))
      this.translate.use(this.language)
      resolve()
    })
  }

  public find(): Observable<Language[]> {
    return this.languageCatalog.asObservable()
  }

  public changeLanguage(selected: any): void {
    this.translate.use(selected.code)
  }

  private getLanguage(): string {
    let navigatorLang: string
    if (isPlatformBrowser(this.platform)) {
      navigatorLang = navigator.language
    } else {
      navigatorLang = String(this.req.headers['accept-language'] || '').substring(0, 2)
    }
    return this.processLanguage(navigatorLang)
  }

  private processLanguage(navigatorLang: string) {
    let lang: string
    if (!this.allowedLanguages.some((l: Language) => l.code === navigatorLang)) {
      lang = this.defaultLanguage // if the browser support the default we retrieve it.
    } else {
      lang = navigatorLang || this.defaultLanguage // return the first, if the array is empty return default
    }
    return lang.substring(0, 2)
  }

  // getLangCode(lang: string) {
  //   const langAllow = this.allowedLanguages.find(allowLang => allowLang.code.substring(0, 2) === lang)
  //   console.log('langAllow', langAllow)
  //   return langAllow ? langAllow.code : ''
  // }

  get currentLang(): string {
    return this.translate.currentLang
  }
}
