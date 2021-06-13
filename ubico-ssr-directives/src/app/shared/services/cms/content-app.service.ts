import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CmsService } from './cms.service'

@Injectable({
  providedIn: 'root',
})
export class ContentAppService {
  constructor(private cmsService: CmsService) {}

  set urlCms(value: string) {
    this.cmsService.urlCms = value
  }

  public getContents<T, S>(endpoint: string, body: S): Observable<T> {
    return this.cmsService.post<T, S>(endpoint, body)
  }

  public getContentById<T>(endpoint: string, id: string): Observable<T> {
    return this.cmsService.get<T>(`${endpoint}/${id}`)
  }
}
