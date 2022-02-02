import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-targil-query-params',
  templateUrl: './targil-query-params.component.html',
  styleUrls: ['./targil-query-params.component.css'],
})
export class TargilQueryParamsComponent implements OnInit {
  title: string;
  constructor(private route: ActivatedRoute) {
    this.title = '';
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data: Params) => {
      // console.log(data);
      this.title = data['name'];
    });
  }
}
