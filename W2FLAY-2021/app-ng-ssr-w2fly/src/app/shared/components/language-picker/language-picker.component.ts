import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { TranslateService } from '@ngx-translate/core'
import { Language } from '../../model/language-dto'
import { LanguageService } from './language.service'

@Component({
  selector: 'language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['../../../../scss/brands/w2fly/components/w-language-picker.scss'],
})
export class LanguagePickerComponent implements OnInit {
  public languages: Observable<Language[]>

  public currentLang: string

  public displayCode: string

  @Input() nameClass = 'w-texColorWhite'

  constructor(private translate: TranslateService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languages = this.languageService.find()
    this.currentLang = 'es_ES'
    this.displayCode = 'ES'
    this.translate.use(this.currentLang)
  }

  public onSelectLanguage(selected: Language): void {
    this.translate.use(selected.code)
    this.currentLang = selected.code
    this.displayCode = selected.display
  }
}
