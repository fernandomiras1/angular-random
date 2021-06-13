import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CmsService {
  private URL_CMS: string

  constructor(private httpClient: HttpClient) {}

  public set urlCms(value: string) {
    this.URL_CMS = value
  }

  public get<T>(endpoint: string, options?: {}): Observable<T> {
    this.verifyUrl()
    const url = `${this.URL_CMS}/${endpoint}`
    return this.httpClient.get<T>(url, options)
  }

  public post<T, S>(endpoint: string, body: S, options?: {}): Observable<T> {
    this.verifyUrl()
    const url = `${this.URL_CMS}/${endpoint}`
    return this.httpClient.post<T>(url, body, options)
  }

  private verifyUrl(): void{
    if (!this.URL_CMS) {
      throw new Error('URL_CMS is empty')
    }
  }
}
