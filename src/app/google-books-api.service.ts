import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GoogleBooksApiService {

  constructor(private  http: HttpClient) { }

  getBooks(): Observable<any> {
    const encodedURI  = encodeURI('https://www.googleapis.com/books/v1/volumes?q=filter=full' + '&maxResults=40');
    const response = this.http.get(encodedURI);
    return response;
  }

  searchBooks(searchRequest): Observable<any> {
    const encodedURI  = encodeURI('https://www.googleapis.com/books/v1/volumes?q=' + searchRequest + '&maxResults=40');
    const response = this.http.get(encodedURI);
    return response;
  }
}

