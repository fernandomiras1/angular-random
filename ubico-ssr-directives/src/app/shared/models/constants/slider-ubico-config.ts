import { SliderConfig } from '@w2m/ngx-components/w2m-slider'

export const sliderConfig: SliderConfig = {
  showArrows: true,
  positionBullets: 'bottom',
  showCustomArrows: true,
  customArrows: {
    position: 'center',
    left: {
      icon: 'fas fa-chevron-left',
    },
    right: {
      icon: 'fas fa-chevron-right',
    },
  },
  alignBullets: 'right',
  type: 'slider',
  rewind: true,
  rewindDuration: 3000,
  focusAt: 0,
  perView: 1,
  gap: 30,
  isCenter: false,
  isAutoplay: false,

}
