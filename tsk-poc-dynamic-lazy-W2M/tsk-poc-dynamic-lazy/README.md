# LEER - FER MIRAS ( lo que contiene esta Arquitectura )


1.	Secciones dinamicas como siempre. clave y valor

export const KNOWN_SECTIONS = {
  'section-hero': SectionHeroModule,
  'section-icons': SectionIconsModule,
  'section-info-image-cards': SectionInfoImageCardsModule,
}


2.	Los componentes de dicha secciones se generan de forma dynamic lazy. Mediante un Pipe y Directiva 

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



3.	El Pipe llamado Seccion ( hace un request a una API me regresa el listado de componentes de dicha seccion)
4.	La directiva LazyCom ( le pasas el tipo de componente y lo genera en tiempo de ejecuccion), ademas se le puede pasar inputs y ouputs.

