import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-paramexamplepage',
  templateUrl: './paramexamplepage.component.html',
  styleUrls: ['./paramexamplepage.component.css'],
})
export class ParamexamplepageComponent implements OnInit {
  paramStr: string;
  constructor(private route: ActivatedRoute) {
    this.paramStr = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.paramStr = params['name'];
    });
  }
}
