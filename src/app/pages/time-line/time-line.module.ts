import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../../core/core.module';

import { BookComponent, BookProgressComponent, GradeComponent, TimeLineComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    TimeLineComponent,
    BookComponent,
    GradeComponent,
    BookProgressComponent,
  ],
  exports: [
    TimeLineComponent
  ]
})
export class TimeLineModule { }
