import { ErrorStateMatcher } from '@angular/material/core'
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms'

export class ErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form?.submitted
    return (control?.invalid && (control.dirty || control.touched || isSubmitted)) as boolean
  }
}
