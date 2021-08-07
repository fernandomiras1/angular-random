import { HttpClient, HttpResponseBase } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ContactFormDTO } from '../../model/contact-form-dto'
import { ContactConstants } from '../../model/constants/contact-constants'

@Injectable({
  providedIn: 'root',
})
export class FormContactService {
  constructor(private httpClient: HttpClient) { }

  public contact(contactForm: ContactFormDTO): Observable<HttpResponseBase> {
    return this.httpClient.post<HttpResponseBase>(ContactConstants.urlContact, contactForm)
  }
}
