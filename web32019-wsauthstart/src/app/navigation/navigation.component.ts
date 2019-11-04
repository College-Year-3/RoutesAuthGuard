import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }
  // tslint:disable-next-line: no-inferrable-types
  navbarOpen: boolean = false;

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  public logout() {
    this.authService.Logout();
    this.router.navigate(['']);
  }
}


