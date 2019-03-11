import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BookDto } from '../../../../core/data-services/books/dto';
import { ProgressUpdateModel } from '../../models';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: BookDto;
  @Output() progressUpdate = new EventEmitter<ProgressUpdateModel>();
}
