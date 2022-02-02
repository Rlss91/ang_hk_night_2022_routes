import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-httpusers',
  templateUrl: './httpusers.component.html',
  styleUrls: ['./httpusers.component.css'],
})
export class HttpusersComponent implements OnInit {
  name: string;
  constructor(private http: HttpClient) {
    this.name = '';
  }

  ngOnInit(): void {
    this.http
      .get<string[]>('http://localhost:3000/users')
      .subscribe((response: string[]) => {
        console.log('response', response);
      });
  }

  handleBtnClick(): void {
    this.http
      .post<{ status: string }>('http://localhost:3000/users', {
        name: this.name,
      })
      .subscribe((response) => {
        console.log('response from post', response);
      });
  }
}
