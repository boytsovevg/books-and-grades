import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';
import { BookComponent, GradeComponent, TimeLineComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    TimeLineComponent,
    BookComponent,
    GradeComponent,
  ],
  exports: [
    TimeLineComponent
  ]
})
export class TimeLineModule { }
