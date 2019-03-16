import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookProgressComponent } from './book-progress.component';

describe('BookProgressComponent', () => {
  let component: BookProgressComponent;
  let fixture: ComponentFixture<BookProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
