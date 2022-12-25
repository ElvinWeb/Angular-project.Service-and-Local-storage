import { Component, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/Models/AuthorList';
import { AuthorServiceService } from '../Services/author-service.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  constructor(
    private router: Router,
    private AuthorSer: AuthorServiceService
  ) {}
  AuthorModel: Array<Author> = [];
  ngOnInit(): void {
    this.AuthorModel = this.AuthorSer.getData();
  }
  onNavigate() {
    this.router.navigate(['./addAuthor']);
  }
}
