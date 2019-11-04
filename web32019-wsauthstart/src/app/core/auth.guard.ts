import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, public router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authService.IsLoggedIn();
    console.log('AuthGuard#canActivate called');
    this.router.navigate(['login']);      // This will bring us to the login page if a user tries to enter URL

    return isLoggedIn;
  }

}
