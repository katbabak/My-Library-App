import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import {FavouriteBooksComponent} from './favourite-books/favourite-books.component';

const routes: Routes = [
  { path: ' ', redirectTo: '/all-books' },
  { path: 'all-books', component: AllBooksComponent },
  { path: 'favourites', component: FavouriteBooksComponent },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
