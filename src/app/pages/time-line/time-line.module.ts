import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeLineComponent } from './components/time-line/time-line.component';
import { BookComponent } from './components/book/book.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    TimeLineComponent,
    BookComponent
  ],
  exports: [
    TimeLineComponent
  ]
})
export class TimeLineModule { }
