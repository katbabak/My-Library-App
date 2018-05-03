import {Injectable} from '@angular/core';

@Injectable()
export class FavouriteBooksStorageService {

  private localStorage = localStorage;

  constructor() {}

  setItem(key: any, value) {
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: any) {

    return JSON.parse(this.localStorage.getItem(key));
  }
  deleteItem(key: any) {
    this.localStorage.removeItem(key);
  }

}
