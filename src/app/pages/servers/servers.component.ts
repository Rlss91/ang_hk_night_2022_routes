import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serversArr: string[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.serversArr = ['server1', 'server2', 'server3'];
  }

  ngOnInit(): void {
    this.route.url.subscribe((data) => {
      console.log('data', data);
    });
  }

  handleBtnClick(server: string): void {
    // console.log(server);
    // this.router.navigate(['servernames']);
    this.router.navigate(['servernames'], {
      queryParams: { servername: server },
      relativeTo: this.route,
      queryParamsHandling: 'merge',
    });
  }
}
