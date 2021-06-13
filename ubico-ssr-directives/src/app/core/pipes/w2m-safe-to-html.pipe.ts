import { Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Pipe({
  name: 'w2mSafeToHtml',
})
export class W2mSafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    return value ? this.sanitizer.bypassSecurityTrustHtml(value) : ''
  }
}
