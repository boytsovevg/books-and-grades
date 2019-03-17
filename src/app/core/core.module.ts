import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BooksDataService } from './data-services';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    BooksDataService
  ],
})
export class CoreModule { }
