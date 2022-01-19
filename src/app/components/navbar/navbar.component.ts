import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  loggedIn: boolean;
  loggedInSub: any;

  constructor(private authService: AuthService) {
    this.loggedIn = false;
  }

  ngOnInit(): void {
    this.loggedInSub = this.authService.loggedInSubject.subscribe((data) => {
      console.log('data', data);
      this.loggedIn = data;
    });
  }

  ngOnDestroy(): void {
    this.loggedInSub.unsubscribe();
  }

  handleLoginClick(): void {
    this.authService.login();
  }

  handleLogoutClick(): void {
    this.authService.logout();
  }
}
