import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { ContentAppService } from '../cms/content-app.service'
import { MagnoliaPetition } from './model/magnolia-petition'

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private readonly URL_CMS = `${environment.URL_API}/cms/api/v1`

  private readonly ENDPOINT_ARTICLES = 'articles'

  constructor(private contentAppService: ContentAppService) {
    this.contentAppService.urlCms = this.URL_CMS
  }

  public getArticles(lang: string): Observable<any> {
    const body: MagnoliaPetition = {
      lang,
    }

    return this.contentAppService.getContents<any, MagnoliaPetition>(this.ENDPOINT_ARTICLES, body)
  }
}
