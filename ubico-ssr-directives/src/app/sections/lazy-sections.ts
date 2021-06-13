import { NgModuleFactory, Type } from '@angular/core'

export const lazySections: { path: string; loadChildren: () => Promise<NgModuleFactory<any> | Type<any>> }[] = [
  {
    path: 'section-hero',
    loadChildren: () => import('./section-hero/section-hero.module')
      .then(m => m.SectionHeroModule),
  },
  {
    path: 'section-jobs',
    loadChildren: () => import('./section-jobs/section-jobs.module')
      .then(m => m.SectionJobsModule),
  },
  {
    path: 'section-container-image',
    loadChildren: () => import('./section-container-image/section-container-image.module')
      .then(m => m.SectionContainerImageModule),
  },
  {
    path: 'section-footer',
    loadChildren: () => import('./section-footer/section-footer.module')
      .then(m => m.SectionFooterModule),
  },
  {
    path: 'section-header',
    loadChildren: () => import('./section-header/section-header.module')
      .then(m => m.SectionHeaderModule),
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
