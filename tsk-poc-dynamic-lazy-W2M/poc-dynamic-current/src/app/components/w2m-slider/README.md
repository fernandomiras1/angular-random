# W2M-SLIDER COMPONENT

## Description
Component to show slider.

## Install libs
```javascript
npm install ngx-glide@11.0.1 @glidejs/glide@3.4.1
```
---

## What w2m-slider does
- Projects content `ng-content` with `class="slide"`

- SliderConfig
  - type of movement carousel or slider
  - showArrow
  - customBulletHTML: add dots or anything to slide
  
- SliderResponsive
  - screen resolution
    - images per View
    - gap padding images

## Models Config Slide
```javascript

@Input() sliderConfig: SliderConfig
//Example configuration
public sliderConfig: SliderConfig = {
  type: 'carousel' | 'slider',
  showArrows: true,
  positionBullets:  'bottom' | 'top' | 'outer',
  customBulletHTML: '<span class="dot-outline dot-outline--dark"><span class="dot dot--dark"></span></span>',
  direction: 'ltr' | 'rtl',
  alignBullets: 'left' | 'center' | 'right',
  rewind: true,
  rewindDuration: 3000,
  focusAt: 0,
  perView: 4,
  gap: 30,
  isAutoplay: false,
  breakpoints: breakpoints
}


//Responsive image configurations
public breakpoints = SliderResponsivebreakpoints =  {
  576: {
    perView: 1,
      gap: 10,
  },

  767: {
    perView: 2,
  },

  1023: {
    perView: 2,
      gap: 15,
  },

  1215: {
    perView: 3,
  },
}
```

## Usage
```javascript
import { SliderModule } from '@w2m/ngx-components/w2m-slider'

@NgModule({
  imports: [ SliderModule ]
})
```

```html
<w2m-slider *ngIf="mediaCatalog$ | async as mediaCatalog" [sliderConfig]="sliderConfig">
  <!-- Add class .slide to children -->
  <some-component *ngFor="let catalog of mediaCatalog" class="slide"></some-component>
</w2m-slider>
```

> **IMPORTANT**  It is required to add the class **`.slide`** to the children of **`w2m-slider`**.  
`<some-component *ngFor="let slide of item.field" class="slide"></some-component>`


