import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servernames',
  templateUrl: './servernames.component.html',
  styleUrls: ['./servernames.component.css'],
})
export class ServernamesComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((data) => {
      console.log('data', data);
    });
  }
}
