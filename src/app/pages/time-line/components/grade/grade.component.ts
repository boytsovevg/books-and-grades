import { Component, Input } from '@angular/core';
import { BookDto } from '../../../../core/data-services/books/dto';
import { Grade } from '../../../../core/enums';

@Component({
  selector: 'grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent {

  @Input() grade: Grade;
  @Input() books: BookDto[];
}
