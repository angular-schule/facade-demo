import { Component, OnInit } from '@angular/core';
import { BooksFacadeService } from '../shared/books-facade.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  // Facade hier providen, damit sie für jede Komponenteninstanz wieder erzeugt wird
  providers: [BooksFacadeService]
})
export class FormComponent implements OnInit {

  books$ = this.booksFacade.books$;
  authors$ = this.booksFacade.authors$;

  constructor(private booksFacade: BooksFacadeService) { }

  ngOnInit(): void {
  }

}
