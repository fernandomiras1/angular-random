import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ContentAppService } from 'src/app/shared/services/cms/content-app.service'
import { environment } from 'src/environments/environment'
import { MagnoliaPetition } from './model/magnolia-petition'
import { NewsResponse } from './model/news-dto'

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private readonly URL_CMS = `${environment.URL_API}/cms/api/v1`

  private readonly ENDPOINT_NEWS = 'posts'

  private newsPage = 0

  constructor(private contentAppService: ContentAppService) {
    this.contentAppService.urlCms = this.URL_CMS
  }

  public getNews(
    path: string,
    size: number,
    lang: string,
    page?: number,
    home = false,
    categories: string[] = [],
  ): Observable<NewsResponse> {
    const numerPage = page ? this.newsPage = page : this.newsPage += 1

    const body: MagnoliaPetition = {
      lang,
      home,
      categories,
      path,
      page: numerPage,
      bestRated: false,
      elem: size || 10,
      imagingVariation: 'is6',
    }

    return this.contentAppService.getContents<NewsResponse, MagnoliaPetition>(this.ENDPOINT_NEWS, body)
  }
}
