import { Component, OnInit } from '@angular/core';
import { GoogleBooksApiService } from '../google-books-api.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  books: any;

  constructor(private googleBooksService: GoogleBooksApiService) { }

  ngOnInit() {
    this.googleBooksService.getBooks()
      .subscribe((data) => {
        this.books = data.items;
        console.dir(this.books);
      });
  }
  onSearch(request) {
    this.googleBooksService.searchBooks(request)
      .subscribe((data) => {
        this.books = data.items;
        console.dir(this.books);
      });
  }
}
