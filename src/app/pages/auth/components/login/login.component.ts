import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthModel } from '../../models';

@Component({
  selector: 'grades-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output() logIn = new EventEmitter<AuthModel>();

  public logInForm = this.fb.group({
    login: ['' , Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder
  ) { }

}
