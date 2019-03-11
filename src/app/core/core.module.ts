import { NgModule } from '@angular/core';

import { BooksDataService } from './data-services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    BooksDataService
  ],
})
export class CoreModule { }
