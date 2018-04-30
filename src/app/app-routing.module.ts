import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { FavouriteBooksComponent } from './favourite-books/favourite-books.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', redirectTo: '/main/all-books', pathMatch: 'full' },
  { path: 'all-books', component: AllBooksComponent },
  { path: 'favourites', component: FavouriteBooksComponent },
  // { path: 'to-read-list', component: MainComponent, canActivate: [AuthGuardService], children: authRoutes },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RouterModule
  ]
})
export class AppRoutingModule { }
