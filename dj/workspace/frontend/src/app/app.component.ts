import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BooksService } from './services/books.service';
import { ApiPage, Book } from './models/book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private booksService = inject(BooksService);

  page: ApiPage<Book> | null = null;
  loading = false;
  error = '';
  query = {
    search: '',
    category: '',
    ordering: '-created_at',
    page: 1,
  };

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.loading = true;
    this.error = '';
    this.booksService.getBooks(this.query).subscribe({
      next: (page) => {
        this.page = page;
        this.loading = false;
      },
      error: () => {
        this.error = 'Could not load books.';
        this.loading = false;
      }
    });
  }

  changePage(delta: number): void {
    const nextPage = this.query.page + delta;
    if (nextPage < 1) return;
    this.query.page = nextPage;
    this.loadBooks();
  }

  applyFilters(): void {
    this.query.page = 1;
    this.loadBooks();
  }

  saveBook(book: Book): void {
    this.booksService.updateBook(book.id, {
      price: book.price,
      in_stock: book.in_stock,
    }).subscribe(() => this.loadBooks());
  }
}
