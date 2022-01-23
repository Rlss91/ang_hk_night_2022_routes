import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-tamplate-driven',
  templateUrl: './form-tamplate-driven.component.html',
  styleUrls: ['./form-tamplate-driven.component.css'],
})
export class FormTamplateDrivenComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  genders: string[] = ['male', 'female'];
  names: string[] = ['kenny', 'john', 'petter'];
  answer: string;
  defaultQuestion: string;
  user = {
    username: '',
    email: '',
    sercretQuestion: '',
    answer: '',
    gender: '',
  };
  submited: boolean;
  responseFromServerPromise: Promise<boolean>;

  constructor() {
    this.answer = '';
    this.defaultQuestion = 'father';
    this.submited = false;
  }

  ngOnInit(): void {}

  handleSubmit(): void {
    console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.sercretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    console.log('user', this.user);
    this.signupForm.reset();
    this.responseFromServerPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
    // this.submited = true;
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
