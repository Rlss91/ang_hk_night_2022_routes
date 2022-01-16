import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutuspage',
  templateUrl: './aboutuspage.component.html',
  styleUrls: ['./aboutuspage.component.css'],
})
export class AboutuspageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleBtnClick(): void {
    this.router.navigate(['']);
  }
}
