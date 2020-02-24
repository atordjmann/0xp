import { Component, OnInit } from '@angular/core';
import { User } from 'src/models';
import { AuthenticationService } from '../logging/services';
import { GlobalService } from '../global.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: User;
  isProfilOpen: Boolean;
  isProfilOpenSubscription: Subscription;
  constructor(private authenticationService: AuthenticationService, private globalService: GlobalService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.isProfilOpen = this.globalService.isProfilOpen;
    this.isProfilOpenSubscription = this.globalService.isProfilOpenSubject.subscribe(
      (isProfilOpen: Boolean) => {
        this.isProfilOpen = isProfilOpen;
      }
    );
  }

}
