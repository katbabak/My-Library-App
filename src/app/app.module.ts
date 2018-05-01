import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import { GoogleBooksApiService } from './google-books-api.service';


import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { FavouriteBooksComponent } from './favourite-books/favourite-books.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    AllBooksComponent,
    FavouriteBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
 //   HttpClient
  ],
  providers: [
    GoogleBooksApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
