import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorServiceService } from 'src/app/Services/author-service.service';
import { Author } from 'src/Models/AuthorList';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css'],
})
export class AddAuthorComponent implements OnInit {
  constructor(
    private Authorfb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private AuthorSer: AuthorServiceService
  ) {}
  ngOnInit(): void {
    this.initialForm();
  }

  @Output() AuthorModel: Array<Author> = [];
  submit: boolean = false;
  Authorform!: FormGroup;
  initialForm() {
    this.Authorform = this.Authorfb.group({
      fullname: [null, Validators.required],
      birthdate: [null, Validators.required],
      birthplace: [null, Validators.required],
      books: [null, Validators.required],
      description: [null, Validators.required],
    });
  }
  // get book(): FormArray {
  //   return this.Authorform.get('book') as FormArray;
  // }

  // newBook() {
  //   return this.Authorfb.group({
  //     books: ['Sefiller'],
  //   });
  // }
  // addAuthor() {
  //   return this.book.push(this.newBook());
  // }
  onSubmit() {
    console.log(this.Authorform.value);
  }
  onAddAuthor() {
    if (this.Authorform.valid) {
      const model = {
        FullName: String,
        BirthDate: String,
        BirthPlace: String,
        Books: String,
        Description: String,
      };

      model.FullName = this.Authorform.get('fullname').value;
      model.BirthDate = this.Authorform.get('birthdate').value;
      model.BirthPlace = this.Authorform.get('birthplace').value;
      model.Books = this.Authorform.get('books').value;
      model.Description = this.Authorform.get('description').value;
      this.AuthorSer.AddAuthor(model);
      this.router.navigate(['/Author']);
    }
    this.submit = true;
  }
}
