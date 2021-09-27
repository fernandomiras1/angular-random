import { SlideArrows } from './slide-arrows'

interface SliderResponsive {
  [key: string]: {
    perView: number;
    focusAt?: number;
    gap?: number;
    type?: 'carousel' | 'slider';
    showBullets?: boolean;
  };
}

export interface SliderConfig {
  type?: 'carousel' | 'slider';
  showArrows?: boolean;
  showBullets?: boolean;
  arrowLeftLabel?: string;
  arrowRightLabel?: string;
  isCenter?: boolean;
  startAt?: number;
  perView?: number;
  focusAt?: number;
  gap?: number;
  isAutoplay?: boolean;
  autoplay?: number;
  hoverPause?: boolean;
  keyboard?: boolean;
  bound?: boolean;
  isSwipeThreshold?: boolean;
  swipeThreshold?: number;
  isDragThreshold?: boolean;
  dragThreshold?: number;
  perTouch?: number;
  isPerTouch?: boolean;
  touchRatio?: number;
  touchAngle?: number;
  animationDuration?: number;
  rewind?: boolean;
  rewindDuration?: number;
  animationTimingFunc?: string;
  direction?: 'ltr' | 'rtl';
  breakpoints?: SliderResponsive;
  showCustomArrows?: boolean;
  alignBullets?: 'left' | 'center' | 'right';
  positionBullets?: 'bottom' | 'top' | 'outer';
  customBulletHTML?: string;
  customArrows?: SlideArrows;
  listenToEvents?: boolean;
}
