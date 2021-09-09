import {
  Directive, ElementRef, Input, OnChanges, Renderer2,
} from '@angular/core'

@Directive({
  selector: '[anchor]',
})
export class AnchorDirective implements OnChanges {
  @Input('anchor') anchor: string

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
  }

  ngOnChanges(): void {
    if (this.anchor) {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'id', this.anchor)
    }
  }
}
