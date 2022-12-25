import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { AddAuthorComponent } from './author/add-author/add-author.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const approute: Routes = [
  { path: 'Author', component: AuthorComponent },
  { path: 'addAuthor', component: AddAuthorComponent },
];
@NgModule({
  declarations: [AppComponent, AuthorComponent, AddAuthorComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approute),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
