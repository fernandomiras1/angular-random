import { Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Pipe({
  name: 'w2flySafeToHtml',
})
export class W2flySafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    return value ? this.sanitizer.bypassSecurityTrustHtml(value) : ''
  }
}
