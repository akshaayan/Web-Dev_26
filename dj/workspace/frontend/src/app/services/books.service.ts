import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiPage, Book } from '../models/book';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8000/api/books/';

  getBooks(query: Record<string, string | number>) {
    let params = new HttpParams();
    Object.entries(query).forEach(([key, value]) => {
      if (value !== '' && value !== null && value !== undefined) {
        params = params.set(key, String(value));
      }
    });
    return this.http.get<ApiPage<Book>>(this.baseUrl, { params });
  }

  updateBook(id: number, changes: Partial<Book>) {
    return this.http.patch<Book>(`${this.baseUrl}${id}/`, changes);
  }
}
