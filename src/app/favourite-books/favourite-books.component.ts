import { Component, OnInit } from '@angular/core';
import { FavouriteBooksStorageService } from '../favourite-books-storage.service';

@Component({
  selector: 'app-favourite-books',
  templateUrl: './favourite-books.component.html',
  styleUrls: ['./favourite-books.component.css']
})
export class FavouriteBooksComponent implements OnInit {

  listLocalBooks = [];

  constructor(private favouriteBooksService: FavouriteBooksStorageService ) { }

  ngOnInit() {
    this.showBooks();
  }

  showBooks() {
    const keys = Object.keys(localStorage);
    const localStorageItems = [];
    for (const item of keys) {
     localStorageItems.push(this.favouriteBooksService.getItem(item));
    }
    this.listLocalBooks = localStorageItems;
    console.log('var local books ');
    console.dir(this.listLocalBooks);
  }

  deleteBookFromFavourites(book) {
    this.favouriteBooksService.deleteItem(book);
    this.showBooks();
  }

}
