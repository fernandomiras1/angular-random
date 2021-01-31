/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing'
import { MagnoliaHeaderService } from './magnolia-header.service'

describe('Service: MagnoliaHeader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagnoliaHeaderService],
    })
  })

  it('should ...', inject([MagnoliaHeaderService], (service: MagnoliaHeaderService) => {
    expect(service).toBeTruthy()
  }))
})
