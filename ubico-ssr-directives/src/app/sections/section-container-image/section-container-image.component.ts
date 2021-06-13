import { Component, OnInit } from '@angular/core'
import { SectionCommon } from '../section-common'

@Component({
  selector: 'section-container-image',
  templateUrl: './section-container-image.component.html',
  styleUrls: ['./section-container-image.component.scss'],
})
export class SectionContainerImageComponent extends SectionCommon implements OnInit {
  ngOnInit(): void {
    console.log('data', this.data)
  }

  // TODO: ELIMINAR HABLARA CON LA GENTE DE MAGNOLIA.
  get isFullText(): boolean {
    const comImage = this.data.fields.find(item => item.typeComponent === 'component-image')
    const AVer = comImage.field.textBox
    return AVer ? AVer.fullText : false
  }

  // public getClassSection(): string {
  //   return this.isFullText
  //     ? `section-container-image-full ${this.data.brand || ''}`
  //     : `section-container-image ${this.data.brand || ''}`
  // }
}
