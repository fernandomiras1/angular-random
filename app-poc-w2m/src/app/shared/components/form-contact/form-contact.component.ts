import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import {
  FormBuilder, FormGroup, Validators,
} from '@angular/forms'
import { ContactConstants } from '../../model/constants/contact-constants'
import { ContactFormDTO } from '../../model/contact-form-dto'
import { FormContactService } from './form-contact.service'

@Component({
  selector: 'form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss'],
})
export class FormContactComponent implements OnInit {
  public formContact: FormGroup

  public readonly urlPolicies: string=ContactConstants.urlPolicies

  public readonly MIN_LENGTH_VALIDATOR: number = 2

  private readonly MAX_LENGTH_VALIDATOR: number = 100

  private readonly ALPHA_PATTERN: string=`([A-Za-z]{${this.MIN_LENGTH_VALIDATOR},${this.MAX_LENGTH_VALIDATOR}})`

  private readonly PATTERN_VALIDATOR: string=`^${this.ALPHA_PATTERN}+(\\s${this.ALPHA_PATTERN}+)?$`

  private readonly VALIDATORS_NAME_SURNAME: Validators = [
    Validators.required,
    Validators.minLength(this.MIN_LENGTH_VALIDATOR),
    Validators.maxLength(this.MAX_LENGTH_VALIDATOR),
    Validators.pattern(this.PATTERN_VALIDATOR),
  ]

  constructor(
    private formBuilder: FormBuilder,
    private formContactService: FormContactService,
  ) { }

  ngOnInit(): void {
    this.formContact = this.formBuilder.group({
      name: ['', this.VALIDATORS_NAME_SURNAME],
      surname: ['', this.VALIDATORS_NAME_SURNAME],
      email: ['', [Validators.required, Validators.email]],
      acceptedPolicy: [false, Validators.requiredTrue],
    })
  }

  public get name() { return this.formContact.get('name') }

  public get surname() { return this.formContact.get('surname') }

  public get email() { return this.formContact.get('email') }

  public get acceptedPolicy() { return this.formContact.get('acceptedPolicy') }

  public submit(formContact: ContactFormDTO): void {
    if (this.formContact.valid) {
      this.formContactService.contact(formContact).subscribe(
        () => {},
        (err: HttpErrorResponse) => { },
      )
    }
  }
}
