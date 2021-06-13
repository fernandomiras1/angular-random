import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CmsService } from 'src/app/shared/services/cms/cms.service'
import { environment } from '../../../environments/environment'
import { PageDynamic } from '../model/dynamic-page/dynamic-data-dto'
import { I18nService } from '../../shared/i18n/i18n.service'

@Injectable({
  providedIn: 'root',
})
export class MagnoliaService {
  public PAGE_CURRENT: string

  private readonly PROJECT = 'ubico'

  private readonly URL_API = `${environment.URL_API}/cms/api/v1`

  constructor(private cmsService: CmsService,
    private i18nService: I18nService) {
    this.cmsService.urlCms = this.URL_API
  }

  public getPage(page: string): Observable<PageDynamic> {
    return this.cmsService
      .get<PageDynamic>(`pages-endpoint/${this.PROJECT}/${page}`, { params: this.addParams })
  }

  get addParams() {
    return {
      locale: this.i18nService.currentLanguage,
    }
  }
}
