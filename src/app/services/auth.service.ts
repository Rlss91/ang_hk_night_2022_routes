import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedInSubject: Subject<boolean>;
  loggedIn: boolean;
  token: string;
  constructor() {
    this.loggedInSubject = new Subject<boolean>();
    this.loggedIn = false;
    this.token = 'this is our token';
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.loggedInSubject.next(this.loggedIn);
        resolve(this.loggedIn);
      }, 800);
    });
  }

  login(): void {
    this.loggedIn = true;
    this.isAuthenticated();
  }

  logout(): void {
    this.loggedIn = false;
    this.isAuthenticated();
  }
}
