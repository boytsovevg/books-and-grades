import { Component, Input } from '@angular/core';
import { BookDto } from '../../../../core/data-services/books/dto';

@Component({
  selector: 'grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent {

  @Input() grade: string;
  @Input() books: BookDto[];
}
