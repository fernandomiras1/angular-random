import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigatorService } from '@app/core/utils/services/navigator.service';
import { SlugifyPipe } from '@app/shared/pipes/slugify.pipe';
import { environment } from '@environments/environment';

import { ConnectionService } from '../../../services/get-connection.service';
import { appendTrackerSolicitar, openPdfNewTab } from '../../../utils/ncom.utils';
import { ChatModalComponent } from '../chat-modal/chat-modal.component';

@Component({
  selector: 'app-footer-ncom',
  templateUrl: './footer-ncom.component.html',
  styleUrls: ['./footer-ncom.component.scss'],
})
export class FooterNComComponent implements OnInit {

  public show = false;
  public data: any;
  public isBrowser: Boolean = false;
  public isConnected: Boolean = false;
  public loading: Boolean = false;
  @Input() resolverData: any;
  @ViewChild('chatDinamico', { read: ViewContainerRef }) chatContainer: ViewContainerRef;
  public chatComponent: ComponentRef<ChatModalComponent> = null;
  bannerInfo;
  // tslint:disable-next-line: prefer-array-literal
  columns: Array<{
    id: string,
    title: string,
    // tslint:disable-next-line: prefer-array-literal
    items: Array<{
      linkText: string,
      linkImage: string,
      type: string,
      linkUrl: string,
    }>,
  }> = [];
  search;
  chatIcon;
  // tslint:disable-next-line: prefer-array-literal
  socialMediaLinks: Array<{
    logo: string,
    url: string,
    description: string,
  }> = [];
  // tslint:disable-next-line: prefer-array-literal
  legalLinks: Array<{
    text: string,
    url: string,
  }> = [];

  constructor(
    protected route: ActivatedRoute,
    private connectionService: ConnectionService,
    private navigatorService: NavigatorService,
  ) {
    if (!this.route.snapshot.data) { return; }
    const { fields } = this.route.snapshot.data.content;
    this.getData(fields);
    this.isBrowser = this.navigatorService.isBrowser;
  }

  async ngOnInit() {
    this.data.isOnline = true;
    if (this.isBrowser) {
      appendTrackerSolicitar();
      openPdfNewTab();
      this.connectionService.monitor().subscribe((isConnected: boolean) => {
        this.isConnected = isConnected;
        if (this.isConnected) {
          this.data.isOnline = true;
        } else {
          this.data.isOnline = false;
        }
      });
    }
    this.fillComponentInfo();
  }

  searchForm(q: any) {
    this.loading = true;
    window.open(`${environment.contentful.BASE_URL_WEB}/ayuda/busqueda?q=${q.value.q}`, '_self');
  }

  fillComponentInfo() {
    this.bannerInfo = {
      text: this.data.banner.fields.text,
      buttonText: this.data.banner.fields.button.fields.text,
      buttonLink: this.data.banner.fields.button.fields.url,
    };
    this.search = {
      show: true,
      placeholder: this.data.search.fields.text,
    };

    this.fillSections();
    this.fillSocialLinks();
    this.fillLegalLinks();
  }

  fillSections() {
    const slugify = new SlugifyPipe();
    const sections = this.data.sections;
    for (let i = 0; i < sections.length; i = i + 1) {
      const items = [];
      const section = sections[i].fields.elements;
      for (let j = 0; j < section.length; j = j + 1) {
        const item = {
          linkText: section[j].fields.number || section[j].fields.text || section[j].fields.nombre,
          linkImage: section[j].sys.contentType.sys.id === 'footerImageLink' && section[j].fields.image.fields.file.url,
          type: section[j].sys.contentType.sys.id,
          linkUrl: section[j].fields.number || section[j].fields.url,
        };
        items.push(item);
      }
      this.columns.push({
        id: slugify.transform(sections[i].fields.title),
        title: sections[i].fields.title,
        // tslint:disable-next-line: object-literal-shorthand
        items: items,
      });
    }
  }

  fillSocialLinks() {
    for (let i = 0; i < this.data.socialLinks.length; i = i + 1) {
      const link = {
        logo: this.data.socialLinks[i].fields.image.fields.file.url,
        url: this.data.socialLinks[i].fields.url,
        description: this.data.socialLinks[i].fields.image.fields.title,
      };
      this.socialMediaLinks.push(link);
    }
  }

  fillLegalLinks() {
    for (let i = 0; i < this.data.subLinks.length; i = i + 1) {
      const link = {
        text: this.data.subLinks[i].fields.text,
        url: this.data.subLinks[i].fields.url,
      };
      this.legalLinks.push(link);
    }
  }

  getData(fields: any) {
    const { content } = fields;
    content.map((item: any) => {
      const type = item.sys.contentType.sys.id;
      const items = item.fields;
      if (type === 'footer') {
        this.data = items;
        this.show = true;
      }
    });
  }
}
