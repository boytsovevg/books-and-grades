import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthDataService } from './auth-data.service';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent, LoginComponent, SignupComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthDataService
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
