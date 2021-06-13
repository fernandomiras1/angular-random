import { Observable } from 'rxjs'
import { TranslateLoader } from '@ngx-translate/core'

import {
  makeStateKey,
  StateKey,
  TransferState,
} from '@angular/platform-browser'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient } from '@angular/common/http'

/**
  To take advantage of loading the translation files on the server-side,
  I created another loader, translate-browser.loader.ts, to fetch the previously loaded data from TransferState.
  If it does not find the translations in the cache, it uses the HTTP loader to get them.
 */

export class TranslateBrowserLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    private transferState: TransferState,
    private prefix: string = './assets/i18n/',
    private suffix: string = '.json',
  ) {}

  public getTranslation(navigatorLang: string): Observable<any> {
    const lang = navigatorLang.substring(0, 2)
    const key: StateKey<number> = makeStateKey<number>(
      `transfer-translate-${lang}`,
    )
    const data = this.transferState.get(key, null)

    // First we are looking for the translations in transfer-state,
    // if none found, http load as fallback
    if (data) {
      return new Observable(observer => {
        observer.next(data)
        observer.complete()
      })
    }
    return new TranslateHttpLoader(this.http, this.prefix, this.suffix).getTranslation(lang)
  }
}

export function translateBrowserLoaderFactory(
  httpClient: HttpClient,
  transferState: TransferState,
) {
  return new TranslateBrowserLoader(httpClient, transferState)
}
