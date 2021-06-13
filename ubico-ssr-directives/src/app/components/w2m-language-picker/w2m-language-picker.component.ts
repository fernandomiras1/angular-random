import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { I18nService } from '../../shared/i18n/i18n.service'
import { Language } from '../../shared/i18n/model/language-dto'

@Component({
  selector: 'w2m-language-picker',
  templateUrl: './w2m-language-picker.component.html',
  styleUrls: ['./w2m-language-picker.component.scss'],
})
export class W2MLanguagePickerComponent implements OnInit {
  public languages: Observable<Language[]>

  public currentLang: string

  constructor(private i18nService: I18nService) {
  }

  ngOnInit(): void {
    this.languages = this.i18nService.find()
    this.changeLanguage()
  }

  public onSelectLanguage(selected: Language): void {
    this.i18nService.changeLanguage(selected)
  }

  private changeLanguage() {
    this.i18nService.changeLanguage$.subscribe((lng: string) => {
      this.currentLang = lng
    })
  }
}
