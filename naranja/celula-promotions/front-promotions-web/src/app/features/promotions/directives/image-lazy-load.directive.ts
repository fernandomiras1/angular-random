import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImageLazyLoad]',
})
export class ImageLazyLoadDirective {
  @Input() appImageLazyLoad: string;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }

  load() {
    const img = this.el.nativeElement;
    if (img.src) {
      return;
    }
    img.src = this.appImageLazyLoad.trim();
    // TODO: comment srcset img.srcset = this.getSrcset(img.src);
  }

  private getSrcset(imgName: string) {
    if (imgName.toLowerCase().includes('.svg')) {
      return '';
    }
    const extension = imgName.split('.').pop();
    const onlyName = imgName.replace(`.${extension}`, '');

    return `${onlyName}@0,75x.${extension} 0.75x,
                      ${onlyName}@1,5x.${extension} 1.5x,
                      ${onlyName}@2x.${extension} 2x,
                      ${onlyName}@3x.${extension} 3x,
                      ${onlyName}@4x.${extension} 4x`;
  }
}
