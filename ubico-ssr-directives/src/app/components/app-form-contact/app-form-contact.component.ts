import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ContactDto } from './model/contact-dto'
import { FormConfigDto } from './model/form-config-dto'

@Component({
  selector: 'app-form-contact',
  templateUrl: './app-form-contact.component.html',
  styleUrls: ['./app-form-contact.component.scss'],
})
export class AppFormContactComponent implements OnInit {
  @Input() formConfig: FormConfigDto

  public formContact: FormGroup

  private readonly PATTERN_EMAIL: string ='^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formContact = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.PATTERN_EMAIL)]],
      doubts: ['', Validators.required],
      acceptedPolicy: [false, Validators.requiredTrue],
    })
  }

  public submit(formData: ContactDto): void {
  }
}
