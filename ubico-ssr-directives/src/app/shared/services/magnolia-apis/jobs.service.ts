import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { JobDetailDto } from '../../../components/app-job-detail/model/job-detail-dto'
import { JobsResponse } from './model/magnolia-api-response'
import { ContentAppService } from '../cms/content-app.service'
import { MagnoliaPetition } from './model/magnolia-petition'

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private readonly URL_CMS = `${environment.URL_API}/cms/api/v1`

  private readonly ENDPOINT_JOBS = 'jobs-endpoint'

  constructor(private contentAppService: ContentAppService) {
    this.contentAppService.urlCms = this.URL_CMS
  }

  // eslint-disable-next-line max-len
  public getJobs(path: string, size: number, page?: number, categories?: string[]): Observable<JobsResponse> {
    const body = <MagnoliaPetition> {
      path,
      lang: 'es',
      imagingVariation: 'is6',
      categories: [],
    }

    return this.contentAppService.getContents<JobsResponse, MagnoliaPetition>(this.ENDPOINT_JOBS, body)
  }

  getJobById(jobId: string): Observable<JobDetailDto> {
    return this.contentAppService.getContentById<JobDetailDto>(this.ENDPOINT_JOBS, jobId)
  }
}
