import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAll(): Observable<Author[]> {
    console.log('AUTHORS getAll');
    return of([
      { id: '1', name: 'Trent Oliver' },
      { id: '2', name: 'Barry Glickman' },
      { id: '3', name: 'Dee Dee Allen' },
      { id: '4', name: 'Angie Dickinson' },
      { id: '5', name: 'Emma Nolan' },
      { id: '6', name: 'Alyssa Greene' },
    ]).pipe(delay(1000));
  }
}
