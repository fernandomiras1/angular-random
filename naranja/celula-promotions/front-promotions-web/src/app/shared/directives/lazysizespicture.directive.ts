import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDatasrcset]',
})
export class LazysizespictureDirective implements OnInit {
  @Input() appDatasrcset: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    // this.elementRef.nativeElement.dataset.srcset = this.appDatasrcset;
    this.renderer.setAttribute(this.elementRef.nativeElement, 'data-srcset', this.appDatasrcset);
  }
}
