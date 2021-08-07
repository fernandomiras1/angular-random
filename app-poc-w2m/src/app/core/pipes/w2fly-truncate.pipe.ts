import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'w2flyTruncate',
})
export class W2flyTruncatePipe implements PipeTransform {
  transform(value: string, limit: number): string {
    return value.length < limit
      ? value
      : `${value.slice(0, limit)}...`
  }
}
