import { NgModuleFactory, Type } from '@angular/core'

export const lazyComponent: { path: string; loadChildren: () => Promise<NgModuleFactory<any> | Type<any>> }[] = [
  {
    path: 'component-subtitle',
    loadChildren: () => import('../components/w2fly-subtitle/w2fly-subtitle.module')
      .then(m => m.W2flySubtitleModule),
  },
  {
    path: 'component-icons',
    loadChildren: () => import('../components/w2fly-info-item/w2fly-info-item.module')
      .then(m => m.W2flyInfoItemModule),
  },
  {
    path: 'component-info-text',
    loadChildren: () => import('../components/w2fly-subtitle/w2fly-subtitle.module')
      .then(m => m.W2flySubtitleModule),
  },
  {
    path: 'component-cards-text',
    loadChildren: () => import('../components/w2fly-card-text/w2fly-card-text.module')
      .then(m => m.W2flyCardTextModule),
  },
  {
    path: 'component-image',
    loadChildren: () => import('../components/w2fly-image/w2fly-image.module')
      .then(m => m.W2flyImageModule),
  },
]

export function lazyArrayComponent() {
  const result = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const w of lazyComponent) {
    result[w.path] = w.loadChildren
  }
  return result
}
