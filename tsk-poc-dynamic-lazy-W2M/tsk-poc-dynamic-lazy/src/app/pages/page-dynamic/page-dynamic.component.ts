import { Component, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { DynamicService } from '../../core/services/dynamic.service'
import { PageDynamic, SectionsDynamic } from '../../core/model/dynamic-page/dynamic-data-dto'
import { DynamicDirective } from '../../core/directives/dynamic.directive'
@Component({
  selector: 'w2fly-page-dynamic',
  template: `
    <main id="content">
      <ng-template appDynamicHost></ng-template>
    </main>
  `,
  styles: [],
})
export class PageDynamicComponent implements OnInit {
  fields: PageDynamic

  @ViewChild(DynamicDirective, { static: true }) dynamicHost: DynamicDirective

  constructor(
    private titleService: Title,
    private dynamicService: DynamicService,
    private route: ActivatedRoute,
  ) {
    this.fields = this.route.snapshot.data.content
  }

  ngOnInit() {
    if (this.fields) {
      const { title } = this.fields
      this.titleService.setTitle(title)
      this.renderComponents(this.fields)
    }
  }

  public renderComponents(fields: PageDynamic) {
    const { content } = fields
    content.forEach((section: SectionsDynamic) => this.dynamicService
      .loadSection(section.typeSection, section, this.dynamicHost))
  }
}
