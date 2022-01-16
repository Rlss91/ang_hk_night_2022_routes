import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-petspage',
  templateUrl: './petspage.component.html',
  styleUrls: ['./petspage.component.css'],
})
export class PetspageComponent implements OnInit {
  petsArr: string[];

  constructor(private route: ActivatedRoute) {
    this.petsArr = ['fish', 'dog', 'cat'];
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
  }
}
