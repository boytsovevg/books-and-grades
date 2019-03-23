import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthModel, SignUpModel } from '../../models';
//
// function PasswordConfirmMatchValidate(passwordControl: AbstractControl): ValidationErrors | null {
//   return passwordControl.get('passwordValue') === passwordControl.get('passwordConfirm') ?
//     null :
//     { confirmPasswordInvalid: true };
// }

@Component({
  selector: 'bag-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  @Output() signUp = new EventEmitter<AuthModel>();

  public signUpForm = this.fb.group({
    email: ['' , Validators.required],
    password: ['', Validators.required],
    passwordConfirm: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  public onSubmit({email, password}: SignUpModel): void {
    this.signUp.emit({ email, password });
  }
}
