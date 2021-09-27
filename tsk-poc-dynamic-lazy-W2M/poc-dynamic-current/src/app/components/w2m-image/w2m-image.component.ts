import { Component, Input } from '@angular/core'
import { ImageDto } from './model/image-dto'

@Component({
  selector: 'w2m-image',
  templateUrl: './w2m-image.component.html',
  styleUrls: ['./w2m-image.component.scss'],
})
export class W2mImageComponent {
  @Input() image: ImageDto
}
