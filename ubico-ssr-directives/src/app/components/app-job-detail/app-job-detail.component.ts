import { Component, Input } from '@angular/core'
import { JobDetailSubtitlesEnum } from './enum/job-detail-subtitles-enum'
import { W2mSubtitleDto } from '../../shared/components/w2m-subtitle/model/w2m-subtitle-dto'
import { JobDetailDto } from './model/job-detail-dto'

@Component({
  selector: 'app-job-detail',
  templateUrl: './app-job-detail.component.html',
  styleUrls: ['./app-job-detail.component.scss'],
})
export class AppJobDetailComponent {
  @Input() job: JobDetailDto

  public JobDetailSubtitles: typeof JobDetailSubtitlesEnum = JobDetailSubtitlesEnum

  getSubtitle(title: string): Partial<W2mSubtitleDto> {
    return { title }
  }

  getClass(property: string): string {
    return `app-job-detail-subtitle-${property}`
  }
}
