import { Component, HostListener, OnInit } from '@angular/core'
import { HeaderDto } from '../../../model/header/header-dto'
import { MagnoliaHeaderService } from '../../../services/magnolia-header.service'

@Component({
  selector: 'w2fly-header',
  templateUrl: './w2fly-header.component.html',
  styleUrls: ['./w2fly-header.component.scss'],
})
export class W2flyHeaderComponent implements OnInit {
  public showMobileMenu = false

  public headerScrolled = false

  public headerTransparent = true

  public headerHeight = 96

  public listMenu: HeaderDto[] = []

  constructor(private magnoliaHeaderService: MagnoliaHeaderService) {}

  ngOnInit(): void {
    this.magnoliaHeaderService.getMenu()
      .subscribe((listMenu: HeaderDto[]) => {
        this.listMenu = listMenu
      })
  }

  @HostListener('window:scroll')
  private handleScroll() {
    if (this.headerTransparent) {
      this.headerScrolled = window.scrollY > this.headerHeight
    }
  }

  public onCloseMobileMenu(): void {
    this.showMobileMenu = false
  }
}
