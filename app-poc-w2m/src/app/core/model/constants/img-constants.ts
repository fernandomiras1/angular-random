import { environment } from '../../../../environments/environment'

export class ImgConstants {
  private static URL_CDN: string

  public static get urlCDN(): string {
    if (!this.URL_CDN) {
      this.URL_CDN = environment.URL_CDN
    }
    return this.URL_CDN
  }
}
