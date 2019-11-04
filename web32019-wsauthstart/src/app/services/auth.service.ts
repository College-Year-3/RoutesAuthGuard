import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line: no-inferrable-types
  private tempLogin: boolean = false;

  constructor() {
  }

  Login(email: string, password: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      // tslint:disable-next-line: quotemark
      if (password === "password") { // is user enter 'password'
        this.tempLogin = true;      // setup tepm variable to true
        resolve(true);
      } else {
        reject('worng password');  // display to console if user does not entered 'password'
      }
    });
  }

  SignUp(email: string, password: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (password === 'password') {
        this.tempLogin = true;
        resolve(true);
      } else {
        reject('passord is too hard to guess try password');
      }
    });
  }

  Logout() {
    this.tempLogin = false;
  }

  IsLoggedIn(): boolean {
    return this.tempLogin;
  }

  GetDisplayName(): string {
    return 'giles';
  }
}
