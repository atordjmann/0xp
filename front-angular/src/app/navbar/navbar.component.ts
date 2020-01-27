import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { User } from 'src/models';
import { AuthenticationService } from '../logging/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: User;

  constructor(private authenticationService: AuthenticationService,
              private router: Router
    ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     }

  ngOnInit() {
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
