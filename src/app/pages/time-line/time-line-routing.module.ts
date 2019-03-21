import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimeLineComponent } from './components';

const routes: Routes = [
  {
    path: 'timeline',
    component: TimeLineComponent
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
export class TimeLineRoutingModule { }
