import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../../core/core.module';

import { BookComponent, BookProgressComponent, GradeComponent, TimeLineComponent } from './components';
import { TimeLineRoutingModule } from './time-line-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    TimeLineRoutingModule
  ],
  declarations: [
    TimeLineComponent,
    BookComponent,
    GradeComponent,
    BookProgressComponent,
  ],
  exports: [
    TimeLineComponent,
    TimeLineRoutingModule
  ]
})
export class TimeLineModule { }
