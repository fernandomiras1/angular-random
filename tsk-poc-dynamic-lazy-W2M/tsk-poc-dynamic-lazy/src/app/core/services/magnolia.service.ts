import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { SECTION_HERO, SECTION_ICONS, SECTION_INFO_IMAGE_CARDS } from 'src/app/core/mock/sections-data'
import { delay, map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root',
})
export class MagnoliaService {
  public contentAPI = {
    pageId: 'newblue-pt',
    title: 'Centro de atención al cliente - W2Fly',
    description: null,
    url: 'http://www.newblue.pt',
    urlSeo: null,
    canonical: null,
    keywords: [],
    sections: [
      {
        uuid: '1afa65c1-c7aa-46d6-ad6e-c711419c1cdb',
        id: null,
        type: 'section-hero',
        anchor: null,
        showBackground: null,
        components: [],
      },
      {
        uuid: '126133e4-118c-44a3-a9cd-ec0bef5e2a2e',
        id: null,
        type: 'section-icons',
        anchor: null,
        showBackground: null,
        components: [],
      },
      {
        uuid: '126133e4-118c-44a3-a9cd-ec0bef5e5tfs34',
        id: null,
        type: 'section-info-image-cards',
        anchor: null,
        showBackground: null,
        components: [],
      },
    ],
  }

  private static DATA_SECTION = {
    '1afa65c1-c7aa-46d6-ad6e-c711419c1cdb': SECTION_HERO,
    '126133e4-118c-44a3-a9cd-ec0bef5e2a2e': SECTION_ICONS,
    '126133e4-118c-44a3-a9cd-ec0bef5e5tfs34': SECTION_INFO_IMAGE_CARDS,
  }

  public getPage(): Observable<any> {
    return of(this.contentAPI)
  }

  public getSections(uuid: string): Observable<any> {
    const sections = MagnoliaService.DATA_SECTION[uuid]

    return of(sections)
  }
}
