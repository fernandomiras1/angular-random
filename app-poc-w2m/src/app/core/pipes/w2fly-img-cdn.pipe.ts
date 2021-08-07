import { Pipe, PipeTransform } from '@angular/core'
import { ImgConstants } from '../model/constants/img-constants'

@Pipe({
  name: 'w2flyImgCdn',
})
export class W2flyImgCdnPipe implements PipeTransform {
  transform(value: string) {
    if (value.indexOf(ImgConstants.urlCDN) === -1) {
      return `${ImgConstants.urlCDN}${value}`
    }
    return value
  }
}
