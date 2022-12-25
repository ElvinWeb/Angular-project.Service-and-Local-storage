import { Injectable } from '@angular/core';
import { Author } from 'src/Models/AuthorList';

@Injectable({
  providedIn: 'root',
})
export class AuthorServiceService {
  constructor() {}

  AuthorModel: Array<Author> = [
    {
      FullName: 'Elvin Sarkarov',
      BirthDate: '04.09.2004',
      BirthPlace: 'London',
      Books: 'Robinson Cruso',
      Description: 'Advanture',
    },
  ];

  onGetRegister() {
    if (localStorage.getItem('AuthorInfo') === null) {
      localStorage.setItem('AuthorInfo', JSON.stringify(this.AuthorModel));
    }
    return this.AuthorModel;
  }

  getData() {
    if (localStorage.getItem('AuthorInfo') !== null) {
      this.AuthorModel = JSON.parse(
        localStorage.getItem('AuthorInfo').toString()
      );
      return this.AuthorModel;
    }
    return null;
  }
  AddAuthor(model: any) {
    this.AuthorModel.push(model);
    localStorage.removeItem('AuthorInfo');
    localStorage.setItem('AuthorInfo', JSON.stringify(this.AuthorModel));
  }
}
