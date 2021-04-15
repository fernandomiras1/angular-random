import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLogoImg]',
  // @ts-ignore
  host: {
    '(error)': 'updateUrl()',
    '[src]': 'src',
  },
})
export class ImagePreloadDirective {
  @Input() src: string;
  @Input() default: string;

  @HostListener('error') updateUrl() {
    this.src = this.default;
  }
}
