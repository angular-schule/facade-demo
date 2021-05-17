import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getAll() {
    console.log('BOOKS getAll');
    return this.http.get<Book[]>('https://api.angular.schule/books');
  }
}
