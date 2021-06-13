import { JobDto } from './job-dto'

interface LinkI {
  next: boolean;
  prev: boolean;
}

export interface MagnoliaApiResponse {
  links?: LinkI;
}

export interface JobsResponse extends MagnoliaApiResponse {
  jobs: JobDto[];
}
