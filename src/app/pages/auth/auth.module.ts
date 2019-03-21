import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent, LoginComponent, SignupComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthComponent
  ],
  exports: [
    AuthComponent,
    AuthRoutingModule
  ]
})
export class AuthModule { }
