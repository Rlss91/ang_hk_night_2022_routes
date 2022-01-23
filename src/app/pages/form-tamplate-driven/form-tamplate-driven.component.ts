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
  constructor() {}

  ngOnInit(): void {}

  handleSubmit(): void {
    console.log(this.signupForm);
  }
}
