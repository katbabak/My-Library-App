import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { AppRoutingModule } from './/app-routing.module';
import { AllBooksComponent } from './all-books/all-books.component';
import { FavouriteBooksComponent } from './favourite-books/favourite-books.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    AllBooksComponent,
    FavouriteBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
