import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnInit,
  Output,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Observable } from 'rxjs';
import { defaults } from '../../../../constants/default-elements';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-navbar-ncom',
  templateUrl: './navbar-ncom.component.html',
  styleUrls: ['./navbar-ncom.component.scss'],
})
export class NavbarNComComponent implements OnInit, AfterViewChecked {
  @Input() title: string;
  @Input() filter = false;
  @Input() showTitle = false;
  @Input() showMenuButton = true;
  @Output() openFilter = new EventEmitter<boolean>();

  public isShowingArrowButton$: Observable<boolean>;
  public data: any;
  public login: string;
  public linksTop: Object[] = [];
  public linksMain: Object[] = [];
  public renderTop: Boolean = true;
  public showMenu: Boolean = false;
  public schema: any;
  public filterIcon = defaults.FILTER_ICON_URL;
  public skipLinkPath: string;
  public showHeader = true;

  private scrollLocked: Boolean = false;
  private currentWidth: Number;
  private readonly isBrowser: Boolean = false;
  private lastScrollTop = 0;
  private scrollTop = 0;
  private navHeight = 0;
  @ViewChild('nav') nav: ElementRef;
  @ViewChild('navMobile') navMobile: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    @Inject(PLATFORM_ID) protected platformId: string) {

    if (!this.route.snapshot.data || !this.route.snapshot.data.content) {
      return;
    }

    const { fields } = this.route.snapshot.data.content;
    this.renderComponents(fields);

    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.currentWidth = window.innerWidth;
    }

    this.isShowingArrowButton$ = this.navigationService.showArrow$;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
    if (this.isBrowser) {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (this.scrollTop > this.lastScrollTop && this.navHeight < this.scrollTop) {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
      this.lastScrollTop = this.scrollTop <= 0 ? 0 : this.scrollTop;
    }
  }

  ngOnInit(): void {
    this.init();
  }

  ngAfterViewChecked(): void {
    if (this.isBrowser) {
      this.navHeight = this.nav.nativeElement.offsetHeight;
      document.body.style.marginTop = `${this.navHeight}px`;
    }
  }

  exit() {
    this.navigationService.exit();
  }

  toggleScroll() {
    this.nav.nativeElement.classList.remove('showHeader', 'hideHeader');
    if (!this.isBrowser) {
      return;
    }

    // tslint:disable-next-line: no-this-assignment
    const nav = this;
    if (nav.scrollLocked) {
      enableBodyScroll(document.querySelector('header'));
    } else {
      disableBodyScroll(document.querySelector('header'));
    }
    nav.scrollLocked = !nav.scrollLocked;
    document.getElementById('overlayMobile').addEventListener('mousewheel', function mousewheelListener() {
      nav.showMenu = false;
      if (nav.scrollLocked) {
        enableBodyScroll(document.querySelector('header'));
      } else {
        disableBodyScroll(document.querySelector('header'));
      }
      nav.scrollLocked = !nav.scrollLocked;
      document.getElementById('overlayMobile').removeEventListener('mousewheel', mousewheelListener);
    });
    document.getElementById('overlayMobile').addEventListener('touchmove', function touchmoveLister(e) {
      nav.showMenu = false;
      if (nav.scrollLocked) {
        enableBodyScroll(document.querySelector('header'));
      } else {
        disableBodyScroll(document.querySelector('header'));
      }
      nav.scrollLocked = !nav.scrollLocked;
      document.getElementById('overlayMobile').removeEventListener('touchmove', touchmoveLister);
    });
  }

  init() {
    this.skipLinkPath = `${this.router.url}#content`;

    if (!this.data) {
      return;
    }

    if (this.data.login === 'NOLCA') {
      this.login = 'https://comercios.naranja.com/';
    } else {
      this.login = 'https://naranjaonline.naranja.com/';
    }

    // data
    const { linksTop, linksMain } = this.data;

    linksMain.map(({ fields: link }) => {
      const friendlyLink = {
        text: link.text,
        url: link.url,
        renderChildren: (
          link.children !== undefined &&
          link.children.length > 0
        ),
        children: [],
        active: false,
      };

      if (friendlyLink.renderChildren) {
        friendlyLink.children = link.children.map(c => c.fields);
      }

      this.linksMain.push(friendlyLink);
    });

    if (linksTop && linksTop.length > 0) {
      linksTop.map(link => this.linksTop.push(link.fields));
    } else {
      this.renderTop = false;
    }

    if (!this.isBrowser) {
      return;
    }

    const body = document.getElementsByTagName('body')[0];
    const setNavShadow = () => {
      const hasShadow = this.navMobile.nativeElement.classList.contains('shadow');
      if (body.scrollTop > 15 && !hasShadow) {
        this.navMobile.nativeElement.classList.add('shadow');
      } else if (body.scrollTop < 15 && hasShadow) {
        this.navMobile.nativeElement.classList.remove('shadow');
      }
    };

    window.addEventListener('mousewheel', setNavShadow);
    window.addEventListener('scroll', setNavShadow);
    window.addEventListener('touchmove', setNavShadow);

    window.addEventListener('resize', () => {
      if (this.showMenu && this.currentWidth !== window.innerWidth) {
        this.showMenu = false;
        this.toggleScroll();
      }
      this.currentWidth = window.innerWidth;
    });

    let css = `
      @media (max-width: 1200px) {
        body {
          padding-top: 52px;
        }
        html, body {
            height: 100%;
          -webkit-overflow-scrolling: touch;
        }
      }
    `;

    if (this.linksMain.filter((e: any) => e.renderChildren).length > 0) {
      this.linksMain.map((e: any, i) => {
        if (!e.renderChildren) {
          return;
        }
        const maxHeight = (e.children.length * 32) + 20;
        // tslint:disable-next-line: prefer-template
        css = css + `
          .nav .main a.dropbtn-${i}.active{
            border-bottom: 2px solid #ff6600;
          }

          .nav .main .dropdown .dropdown-content.dropdown-${i}-content.active {
            display: flex;
            max-height: ${maxHeight}px;
          }

          .nav .main .backdrop-${i}.active {
            height: ${maxHeight}px;
          }

          .nav .mobile a.dropbtn-${i}.active{
            border-bottom: 2px solid #ff6600;
          }

          .nav .mobile .dropdown .dropdown-content.dropdown-${i}-content.active {
            display: flex;
            max-height: ${maxHeight}px;
          }
        `;
      });
    }

    const head = document.getElementsByTagName('head')[0];
    const styleNav = document.createElement('style');
    styleNav.appendChild(document.createTextNode(css));
    head.appendChild(styleNav);
  }

  renderComponents(fields: any) {
    const { content } = fields;
    content.map((item: any) => {
      const type = item.sys.contentType.sys.id;
      const items = item.fields;
      if (type === 'nav') {
        this.data = items;
      }
    });
  }

  goBack() {
    this.navigationService.goBack();
  }

  onOpenFilter() {
    this.openFilter.emit(true);
  }
}
