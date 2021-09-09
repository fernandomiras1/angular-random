export const KNOWN_COMPONENT = {
  'component-subtitle': () => import('../components/w2fly-subtitle/w2fly-subtitle.module')
    .then(({ W2flySubtitleModule }) => W2flySubtitleModule),
  'component-icons': () => import('../components/w2fly-info-item/w2fly-info-item.module')
    .then(({ W2flyInfoItemModule }) => W2flyInfoItemModule),
  'component-info-text': () => import('../components/w2fly-subtitle/w2fly-subtitle.module')
    .then(({ W2flySubtitleModule }) => W2flySubtitleModule),
  'component-cards-text': () => import('../components/w2fly-card-text/w2fly-card-text.module')
    .then(({ W2flyCardTextModule }) => W2flyCardTextModule),
  'component-image': () => import('../components/w2fly-image/w2fly-image.module')
    .then(({ W2flyImageModule }) => W2flyImageModule),
}
