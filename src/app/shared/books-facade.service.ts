import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { Author } from './author';
import { AuthorsService } from './authors.service';
import { Book } from './book';
import { BooksService } from './books.service';

interface LocalBooksState {
  books: Book[];
  authors: Author[];
}

// nur @Injectable() ohne providedIn! Die Facade wird dann in der Komponente providet
@Injectable()
export class BooksFacadeService extends ComponentStore<LocalBooksState> {
  readonly books$ = this.select(state => state.books);
  readonly authors$ = this.select(state => state.authors);

  constructor(private booksService: BooksService, private authorsService: AuthorsService) {
    // Initial State
    super({
      books: [],
      authors: []
    });

    // initialies Laden triggern
    this.loadBooks();
    this.loadAuthors();
  }

  loadBooks = this.effect(origin$ => {
    return origin$.pipe(
      switchMap(() => this.booksService.getAll().pipe(
        tap(books => this.patchState({ books })),
        catchError(() => EMPTY)
      ))
    );
  });

  loadAuthors = this.effect(origin$ => {
    return origin$.pipe(
      switchMap(() => this.authorsService.getAll().pipe(
        tap(authors => this.patchState({ authors })),
        catchError(() => EMPTY)
      ))
    );
  });
}
