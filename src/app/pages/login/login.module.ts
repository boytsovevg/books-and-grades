import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthComponent, LoginComponent, SignupComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthComponent
  ],
  exports: [
    AuthComponent
  ]
})
export class LoginModule { }
