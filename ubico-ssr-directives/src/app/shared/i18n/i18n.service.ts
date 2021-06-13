import {
  Injectable, Optional, Inject, PLATFORM_ID,
} from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { REQUEST } from '@nguniversal/express-engine/tokens'
import { Request } from 'express'
import { isPlatformBrowser, DOCUMENT } from '@angular/common'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { Language } from './model/language-dto'

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  public changeLanguage$: Observable<string>

  public readonly defaultLanguage = 'es'

  public readonly allowedLanguages: Language[] = [
    {
      code: 'en',
      name: 'English',
      startDate: 0,
    },
    {
      code: 'es',
      name: 'Español',
      startDate: 1,
    },
  ]

  private changeLanguageSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.defaultLanguage)

  private currentLang: string

  constructor(
      private translate: TranslateService,
      @Optional() @Inject(REQUEST) private req: Request,
      @Inject(PLATFORM_ID) private platform: string,
      @Inject(DOCUMENT) private document: Document,
  ) {
    this.currentLang = this.getLanguage()
    this.changeLanguage$ = this.changeLanguageSubject.asObservable()
  }

  init(path: string): void {
    this.translate.addLangs(this.allowedLanguages.map(lang => lang.code))
    this.currentLanguage = this.processLanguage(path)
    this.changeLanguageSubject.next(this.currentLanguage)
    this.translate.use(this.processLanguage(path))
    this.setLangHTML()
  }

  public find(): Observable<Language[]> {
    return of(this.allowedLanguages)
  }

  public getURL(path: string) {
    return path.replace(`/${this.processLanguage(path)}`, '')
  }

  public changeLanguage(selected: Language): void {
    if (selected.code !== this.currentLanguage) {
      this.currentLanguage = selected.code
      this.translate.use(selected.code)
      this.changeLanguageSubject.next(selected.code)
      this.setLangHTML()
    }
  }

  public getLanguage(): string {
    return isPlatformBrowser(this.platform)
      ? this.currentLanguage || this.defaultLanguage
      : this.getLangFromSSR()
  }

  private getLangFromSSR() {
    return this.req
      ? this.extractLang(this.req.url)
      : this.defaultLanguage
  }

  private processLanguage(path: string): string {
    return this.allowedLanguages.some((lang: Language) => lang.code === this.extractLang(path))
      ? this.extractLang(path)
      : this.defaultLanguage
  }

  private extractLang(lang: string): string {
    return lang.substring(1, 3)
  }

  private setLangHTML() {
    this.document.documentElement.lang = this.currentLang
  }

  get currentLanguage(): string {
    return this.currentLang
  }

  set currentLanguage(lng: string) {
    this.currentLang = lng
  }
}
