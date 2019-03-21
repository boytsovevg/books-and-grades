import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './components';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
