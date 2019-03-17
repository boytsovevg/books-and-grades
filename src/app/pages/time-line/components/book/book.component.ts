import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { BookDto } from '../../../../core/data-services/books/dto';
import { BookProgressModel } from '../../models';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: BookDto;
  @Output() progressUpdate = new EventEmitter<BookProgressModel>();

  public showProgress$ = new Subject<boolean>();

  public updateBookProgress(pagesCount: number): void {
    this.progressUpdate.emit({ bookId: this.book.id, pagesCount });
  }
}
