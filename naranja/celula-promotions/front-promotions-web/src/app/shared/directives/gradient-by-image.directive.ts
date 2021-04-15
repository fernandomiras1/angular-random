import { animate, AnimationBuilder, AnimationMetadata, AnimationPlayer, style } from '@angular/animations';
import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

class Grade {
  private img: any;
  private gradientData: any[];
  private canvas: any;
  private ctx: any;
  private imageDimensions: { width: number, height: number };
  private imageData: any[];

  constructor(private container: ElementRef, private image: ElementRef) {
    this.container = container;
    this.img = image;
    this.gradientData = [];
    if (!this.img || !this.container) {
      return;
    }
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.imageDimensions = {
      width: 0,
      height: 0,
    };
    this.imageData = [];
    this.readImage();
  }

  readImage() {
    this.imageDimensions.width = this.img.width * 0.1;
    this.imageDimensions.height = this.img.height * 0.1;
    this.render();
  }

  getImageData() {
    const imageData = this.ctx.getImageData(
      0, 0, this.imageDimensions.width, this.imageDimensions.height).data;
    this.imageData = Array.from(imageData);
  }

  getChunkedImageData() {
    const perChunk = 4;

    const chunked = this.imageData.reduce(
      (ar, it, i) => {
        const ix = Math.floor(i / perChunk);
        if (!ar[ix]) {
          ar[ix] = [];
        }
        ar[ix].push(it);
        return ar;
      },
      []);

    const filtered = chunked.filter((rgba: any) => {
      return rgba.slice(0, 2).every(val => val < 250) && rgba.slice(0, 2).every(val => val > 0);
    });

    return filtered;
  }

  getRGBAGradientValues(top) {
    return `rgb(${top[1].rgba.slice(0, 3).map(val => (+val < 200) ? +val + 30 : +val)
      .join(',')}) 7%, rgb(${top[1].rgba.slice(0, 3).join(',')}) 93%`;
    // return top.map((color, index) => {
    //   return `rgb(${color.rgba.slice(0, 3).join(',')}) ${index === 0 ? '7%' : '93%'} `;
    // }).join(',');
  }

  getCSSGradientProperty(top) {
    const val = this.getRGBAGradientValues(top);
    return `background-image: linear-gradient(315deg, ${val}); `;
  }

  getMiddleRGB(start, end) {
    const w = 0.5 * 2 - 1;
    const w1 = (w + 1) / 2.0;
    const w2 = 1 - w1;
    const rgb = [
      // tslint:disable-next-line: radix
      parseInt((start[0] * w1 + end[0] * w2).toString()),
      // tslint:disable-next-line: radix
      parseInt((start[1] * w1 + end[1] * w2).toString()),
      // tslint:disable-next-line: radix
      parseInt((start[2] * w1 + end[2] * w2).toString()),
    ];
    return rgb;
  }

  getSortedValues(uniq) {
    const occurs = Object.keys(uniq).map((key) => {
      const rgbaKey = key;
      const components = key.split('|');
      const brightness = (
        (+components[0] * 299) +
        (+components[1] * 587) +
        (+components[2] * 114)) / 1000;
      return {
        brightness,
        rgba: rgbaKey.split('|'),
        occurs: uniq[key],
      };
    }).sort((a, b) => a.occurs - b.occurs).reverse().slice(0, 10);
    return occurs.sort((a, b) => a.brightness - b.brightness).reverse();
  }

  getTextProperty(top) {
    const rgb = this.getMiddleRGB(top[0].rgba.slice(0, 3), top[1].rgba.slice(0, 3));
    const o = Math.round((
      // tslint:disable-next-line: radix
      (parseInt(rgb[0].toString()) * 299) +
      // tslint:disable-next-line: radix
      (parseInt(rgb[1].toString()) * 587) +
      // tslint:disable-next-line: radix
      (parseInt(rgb[2].toString()) * 114)) / 1000);
    if (o > 125) {
      return 'color: #000';
    }
    return 'color: #fff';

  }

  getTopValues(uniq) {
    const sorted = this.getSortedValues(uniq);
    return [sorted[0], sorted[sorted.length - 1]];
  }

  getUniqValues(chunked) {
    return chunked.reduce(
      (accum, current) => {
        const key = current.join('|');
        if (!accum[key]) {
          accum[key] = 1;
          return accum;
        }
        // tslint:disable-next-line: no-increment-decrement
        accum[key] = ++(accum[key]);
        return accum;
      },
      {});
  }

  getGradient() {
    const ls = window.sessionStorage;
    const item_name = `grade-${this.img.getAttribute('src')} `;
    let top = null;

    if (ls && ls.getItem(item_name)) {
      top = JSON.parse(ls.getItem(item_name));
    } else {
      const chunked = this.getChunkedImageData();
      top = this.getTopValues(this.getUniqValues(chunked));

      if (ls) {
        ls.setItem(item_name, JSON.stringify(top));
      }
    }

    const gradientProperty = this.getCSSGradientProperty(top);
    const textProperty = this.getTextProperty(top);
    return `${this.container.nativeElement.getAttribute('style') || ''}; ${gradientProperty}; ${textProperty} `;
  }

  render() {
    this.canvas.width = this.imageDimensions.width;
    this.canvas.height = this.imageDimensions.height;
    this.ctx.drawImage(this.img, 0, 0, this.imageDimensions.width, this.imageDimensions.height);
    this.getImageData();
  }
}

@Directive({
  selector: '[appGradientBackground]',
})
export class GradientBackgroundDirective implements AfterViewInit {
  @Input() appGradientBackground: string;
  private anim: AnimationPlayer;
  private img: any;
  constructor(
    private builder: AnimationBuilder,
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
    const metadata = this.fadeIn();
    const factory = this.builder.build(metadata);
    this.anim = factory.create(this.elementRef.nativeElement);
  }

  ngAfterViewInit(): void {
    this.img = this.renderer.createElement('img');
    this.renderer.setAttribute(this.img, 'crossorigin', 'anonymous');
    this.renderer.setAttribute(this.img, 'src', this.appGradientBackground.replace('.webp', '.png'));
    this.renderer.listen(this.img, 'load', () => {
      this.setGradient(this.elementRef, this.img);
    });
    this.renderer.listen(this.img, 'error', () => {
      this.setDefaultGradient();
    });
  }

  // ngOnDestroy(): void {
  //   const ls = window.sessionStorage;
  //   ls.removeItem(`grade-${this.img.getAttribute('src')} `);
  // }

  private setGradient(divContainer: ElementRef, image: ElementRef) {
    try {
      const grade = new Grade(divContainer, image);
      const gradient = grade.getGradient();
      this.renderer.setAttribute(this.elementRef.nativeElement, 'style', gradient);
      this.anim.play();
    } catch (error) {
      this.setDefaultGradient();
    }
  }

  private setDefaultGradient() {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'style',
      'background-image: linear-gradient(to right, #FF5500 7%, #EF4B1D 93%);');
    this.anim.play();
  }

  private fadeIn(): AnimationMetadata[] {
    return [
      style({ opacity: 0 }),
      animate('600ms ease-in', style({ opacity: 1 })),
    ];
  }
}
