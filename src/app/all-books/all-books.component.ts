import { Component, OnInit } from '@angular/core';
import { GoogleBooksApiService } from '../google-books-api.service';
import {FavouriteBooksStorageService} from '../favourite-books-storage.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  books: any;

  constructor(private googleBooksService: GoogleBooksApiService,
              private favouriteBooksService: FavouriteBooksStorageService) { }

  ngOnInit() {
   this.getBooks();
  }

  onSearch(request) {
    if (!request) {
      this.getBooks();
      return;
    }
    this.googleBooksService.searchBooks(request)
      .subscribe((data) => {
        this.books = data.items;
        this.checkStorage();
        console.dir(this.books);
        console.dir(data);
      });
  }

  getBooks() {
    this.googleBooksService.getBooks()
      .subscribe((data) => {
        this.books = data.items;
        this.checkStorage();
        console.dir(this.books);
        console.dir(data);
      });
  }

  addToFavourites(idx: number) {
      this.books[idx].isFavourite = true;
      this.favouriteBooksService.setItem(this.books[idx].id, this.books[idx]);
  }

  checkStorage() {
    for (let i = 0; i < this.books.length; i++) {
      if (localStorage.getItem(this.books[i].id) !== null) {
        this.books[i].isFavourite = true;
      }
    }
  }
}
