# LEER - FER MIRAS ( lo que contiene esta Arquitectura )


1.	Secciones dinamicas como siempre. clave y valor


export const KNOWN_SECTIONS = {
  'section-hero': SectionHeroModule,
  'section-icons': SectionIconsModule,
  'section-info-image-cards': SectionInfoImageCardsModule
}


2.	Los componentes de dicha secciones se generan de forma normal.

  public loadSection(type: string, data: SectionsDynamic, host: DynamicDirective) {
    const moduleClass = DynamicService.KNOWN_SECTIONS[type]
    if (!moduleClass) {
      return null
    }
    const entryComponent = moduleClass.entry
    const componentFactory = this.componentFactory.resolveComponentFactory<DynamicComponent>(entryComponent)
    const componentRef = host.viewContainerRef.createComponent<DynamicComponent>(componentFactory)
    componentRef.instance.data = data
    return componentRef
  }