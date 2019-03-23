import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthModel, SignUpModel } from '../../models';

@Component({
  selector: 'grades-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  @Output() signUp = new EventEmitter<AuthModel>();

  public signUpForm = this.fb.group({
    login: ['' , Validators.required],
    password: ['', Validators.required],
    passwordConfirm: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  public onSubmit({login, password}: SignUpModel): void {
    this.signUp.emit({ login, password });
  }
}
