import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'book-progress',
  templateUrl: './book-progress.component.html',
  styleUrls: ['./book-progress.component.scss']
})
export class BookProgressComponent {

  @Input() progress: number;
  @Input() pages: number;
  @Output() progressUpdate = new EventEmitter<unknown>();

}
