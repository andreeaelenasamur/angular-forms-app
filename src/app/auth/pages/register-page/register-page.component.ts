import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as CustomValidators from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern(CustomValidators.firstNameAndLastnamePattern) ]],
    email: ['', [ Validators.required, Validators.pattern(CustomValidators.emailPattern) ]],
    username: ['', [ Validators.required, CustomValidators.canBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  });

  constructor(  private fb: FormBuilder ) {}

  isValidField( field:string ){
    // TODO obtener validación desde un servicio

  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
