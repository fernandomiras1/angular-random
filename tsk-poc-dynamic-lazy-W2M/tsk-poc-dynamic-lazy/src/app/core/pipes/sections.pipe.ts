import { Pipe, PipeTransform } from '@angular/core'
import { MagnoliaService } from 'src/app/core/services/magnolia.service'

@Pipe({
  name: 'sections',
})
export class SectionsPipe implements PipeTransform {
  constructor(private magnoliaService: MagnoliaService) {}

  transform(uuid: string): any {
    return this.magnoliaService.getSections(uuid)
  }
}
