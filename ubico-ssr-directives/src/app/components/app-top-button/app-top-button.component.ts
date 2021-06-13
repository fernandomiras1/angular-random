import { isPlatformBrowser, ViewportScroller } from '@angular/common'
import {
  Component, HostListener, Inject, PLATFORM_ID,
} from '@angular/core'
import { ButtonDto } from 'src/app/shared/components/w2m-button/model/button-dto'

@Component({
  selector: 'app-top-button',
  templateUrl: './app-top-button.component.html',
  styleUrls: ['./app-top-button.component.scss'],
})
export class AppTopButtonComponent {
  public showButton=false

  public buttonData: ButtonDto ={
    textButton: '',
  }

  private readonly DEFAULT_HEIGHT_SCROLL=200

  constructor(
    @Inject(PLATFORM_ID) private platform: string,
    private viewportScroller: ViewportScroller,
  ) {}

  @HostListener('window:scroll')
  public scrolled(): void {
    if (isPlatformBrowser(this.platform)) {
      this.showButton = window.scrollY > this.DEFAULT_HEIGHT_SCROLL
    }
  }

  public goToTop(): void{
    this.viewportScroller.scrollToPosition([0, 0])
  }
}
