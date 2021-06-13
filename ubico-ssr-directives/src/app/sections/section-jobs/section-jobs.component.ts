import { Component, OnInit, ViewChild } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { MatDrawer } from '@angular/material/sidenav'
import { Router } from '@angular/router'
import { CategorieI } from '../../shared/services/magnolia-apis/model/news-dto'
import { JobDetailDto } from '../../components/app-job-detail/model/job-detail-dto'
import { JobDto } from '../../shared/services/magnolia-apis/model/job-dto'

import { SectionCommon } from '../section-common'
import { JobsService } from '../../shared/services/magnolia-apis/jobs.service'

@Component({
  selector: 'app-section-jobs',
  templateUrl: './section-jobs.component.html',
  styleUrls: ['./section-jobs.component.scss'],
})
export class SectionJobsComponent extends SectionCommon implements OnInit {
  jobs$: Observable<JobDto[]>

  selectedJob: JobDetailDto

  @ViewChild('drawer') public drawer: MatDrawer

  constructor(
    private jobsService: JobsService,
    private router: Router,
  ) { super() }

  ngOnInit(): void {
    if (this.data) {
      const { path, size } = this.data
      this.jobs$ = this.jobsService.getJobs(path, size).pipe(
        map(data => data.jobs),
      )
    }
  }

  getJobCategories(job: JobDto): CategorieI[] {
    return job.categories
      .map(category => category.name)
      .reduce((acc, val) => acc.concat(val), [])
  }

  showJobDetail(jobId: string): void {
    this.jobsService.getJobById(jobId).subscribe((job: JobDetailDto) => {
      this.selectedJob = job
      this.drawer.toggle()
    })
  }

  navigateToCategoryPage(event: MouseEvent, category: CategorieI): void {
    event.stopPropagation()
  }
}
