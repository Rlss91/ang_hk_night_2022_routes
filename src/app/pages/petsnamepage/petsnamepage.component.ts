import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-petsnamepage',
  templateUrl: './petsnamepage.component.html',
  styleUrls: ['./petsnamepage.component.css'],
})
export class PetsnamepageComponent implements OnInit {
  selectedPet: string;

  constructor(private route: ActivatedRoute) {
    this.selectedPet = '';
  }

  ngOnInit(): void {
    // console.log(this.route.snapshot.queryParams);
    this.route.queryParams.subscribe((data: any) => {
      console.log(data);
      this.selectedPet = data.petname;
    });
    this.route.fragment.subscribe((data: any) => {
      console.log('fragment:', data);
    });
  }
}
