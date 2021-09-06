import { NgModuleFactory, Type } from '@angular/core'

export const lazySections: { path: string; loadChildren: () => Promise<NgModuleFactory<any> | Type<any>> }[] = [
  {
    path: 'section-hero',
    loadChildren: () => import('./section-hero/section-hero.module')
      .then(m => m.SectionHeroModule),
  },
  {
    path: 'section-icons',
    loadChildren: () => import('./section-icons/section-icons.module')
      .then(m => m.SectionIconsModule),
  },
  {
    path: 'section-info-image-cards',
    loadChildren: () => import('./section-info-image-cards/section-info-image-cards.module')
      .then(m => m.SectionInfoImageCardsModule),
  },
]

export function lazyArraySection() {
  const result = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const w of lazySections) {
    result[w.path] = w.loadChildren
  }
  return result
}
