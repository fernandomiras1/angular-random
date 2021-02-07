import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Language } from '../../model/language-dto'
import { I18nService } from '../../i18n/i18n.service'

@Component({
  selector: 'language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss'],
})
export class LanguagePickerComponent implements OnInit {
  public languages: Observable<Language[]>

  public currentLang: string

  @Input() nameClass = 'w-texColorWhite'

  constructor(private i18nService: I18nService) { }

  ngOnInit(): void {
    this.languages = this.i18nService.find()
    this.currentLang = this.i18nService.language
  }

  public onSelectLanguage(selected: Language): void {
    this.i18nService.changeLanguage(selected)
    this.currentLang = selected.code
  }
}
