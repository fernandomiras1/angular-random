export const KNOWN_SECTIONS_LAZY = {
  'section-hero': () => import('../sections/section-hero/section-hero.module')
    .then(({ SectionHeroModule }) => SectionHeroModule),
  'section-icons': () => import('../sections/section-icons/section-icons.module')
    .then(({ SectionIconsModule }) => SectionIconsModule),
  'section-info-image-cards': () => import('../sections/section-info-image-cards/section-info-image-cards.module')
    .then(({ SectionInfoImageCardsModule }) => SectionInfoImageCardsModule),
}
