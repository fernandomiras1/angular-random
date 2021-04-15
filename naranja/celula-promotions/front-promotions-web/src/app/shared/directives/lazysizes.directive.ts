import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { NavigatorService } from '../../core/utils/services/navigator.service';

@Directive({
  selector: '[appDatasrc]',
})
export class LazysizesDirective implements OnInit {
  @Input() appDatasrc: string;
  @Input() defaultImage: string;
  @Output() isEmptyImage = new EventEmitter<boolean>();

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private navigator: NavigatorService,
  ) { }

  ngOnInit() {
    if (!this.navigator.isCrawler()) {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'data-src', this.appDatasrc);
    } else {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'src', this.appDatasrc);
    }
  }

}
