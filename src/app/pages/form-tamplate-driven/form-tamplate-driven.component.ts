import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-tamplate-driven',
  templateUrl: './form-tamplate-driven.component.html',
  styleUrls: ['./form-tamplate-driven.component.css'],
})
export class FormTamplateDrivenComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  genders = ['male', 'female'];
  names = ['kenny', 'john', 'petter'];
  answer: string;
  defaultQuestion: string;

  constructor() {
    this.answer = '';
    this.defaultQuestion = 'father';
  }

  ngOnInit(): void {}

  handleSubmit(): void {
    console.log(this.signupForm);
  }

  sugUserName(): void {
    let date = new Date();
    this.signupForm.form.patchValue({
      userData: {
        username: this.names[date.getMilliseconds() % 3],
      },
    });
  }
}
