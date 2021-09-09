import { Component, Input } from '@angular/core'
import { ComponentDto } from '../../core/model/component-dto'
import { ImageDto } from '../../core/model/image-dto'
@Component({
  selector: 'w2fly-image',
  templateUrl: './w2fly-image.component.html',
  styleUrls: ['./w2fly-image.component.scss'],
})
export class W2flyImageComponent extends ComponentDto {
  @Input() data: ImageDto

  ngOnInit(): void {
    this.data.borderRadiusStyle = '0.625rem 8rem 0.625rem 0.625rem '
  }

  public getBackground(): string {
    return `url(${this.data.image}) no-repeat center / cover`
  }
}
