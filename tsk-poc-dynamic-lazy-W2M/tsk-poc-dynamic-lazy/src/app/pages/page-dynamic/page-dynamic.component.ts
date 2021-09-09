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
  data: any

  @ViewChild(DynamicDirective, { static: true }) dynamicHost: DynamicDirective

  constructor(
    private titleService: Title,
    private dynamicService: DynamicService,
    private route: ActivatedRoute,
  ) {
    this.data = this.route.snapshot.data.content
    console.log('PAGE', this.data)
  }

  ngOnInit() {
    if (this.data) {
      const { title } = this.data
      this.titleService.setTitle(title)
      this.renderComponents(this.data)
    }
  }

  public renderComponents({ sections }) {
    console.log('renderComponents', sections)
    sections.map((section: SectionsDynamic) => this.dynamicService
      .loadSection(section.type, section, this.dynamicHost))
  }
}
