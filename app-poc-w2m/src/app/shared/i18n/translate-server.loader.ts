import { join } from 'path'
import { Observable } from 'rxjs'
import { TranslateLoader } from '@ngx-translate/core'
import {
  makeStateKey,
  StateKey,
  TransferState,
} from '@angular/platform-browser'
import * as fs from 'fs'

/**
  We need the translation files on the server-side.
  Working on the server-side, we can get the files through the file system.

  First, I created a custom loader, translate-server.loader.ts, for the server module.
  It uses TransferState in order to later retrieve the translations on the client-side.
 */
export class TranslateServerLoader implements TranslateLoader {
  constructor(
    private transferState: TransferState,
    private prefix: string = 'i18n',
    private suffix: string = '.json',
  ) {}

  public getTranslation(lang: string): Observable<any> {
    return new Observable(observer => {
      const ASSETS_FOLDER = join(
        process.cwd(),
        'dist',
        'app-ng-ssr-w2fly',
        'browser',
        'assets',
        this.prefix,
      )

      const jsonData = JSON.parse(
        fs.readFileSync(`${ASSETS_FOLDER}/${lang}${this.suffix}`, 'utf8'),
      )

      // Here we save the translations in the transfer-state
      const key: StateKey<number> = makeStateKey<number>(
        `transfer-translate-${lang}`,
      )
      this.transferState.set(key, jsonData)

      observer.next(jsonData)
      observer.complete()
    })
  }
}

export function translateServerLoaderFactory(transferState: TransferState) {
  return new TranslateServerLoader(transferState)
}
