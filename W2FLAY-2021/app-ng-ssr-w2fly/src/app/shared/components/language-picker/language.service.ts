import { Injectable } from '@angular/core'
import { Observable, ReplaySubject } from 'rxjs'
import { Language } from '../../model/language-dto'

@Injectable({
  providedIn: 'root',
})

export class LanguageService {
  private languages: Language[]

  private languageCatalog: ReplaySubject<Language[]> = new ReplaySubject<Language[]>()

  constructor() {
    this.languages = [
      {
        code: 'en_US',
        name: 'Inglés',
        display: 'US',
      },
      {
        code: 'es_ES',
        name: 'Español',
        display: 'ES',
      },
      {
        code: 'pt_PT',
        name: 'Portugués',
        display: 'PT',
      },
    ]

    this.languageCatalog.next(this.languages)
  }

  public find(): Observable<Language[]> {
    return this.languageCatalog.asObservable()
  }
}
