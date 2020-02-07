import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../logging/services';
import { User } from 'src/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  isStudent: boolean;
  showProfile: boolean;
  showCandidatures: boolean;
  showNotifs: boolean;
  profile: any;

  constructor(private authenticationService: AuthenticationService,
    private router: Router) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  clicSection = (e, section) => {
    const buttons = document.getElementsByClassName('bar-button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('current');
    }
    e.target.classList.add('current');
    if (section === 'profil') {
      this.showProfile = true;
      this.showCandidatures = false;
      this.showNotifs = false;
    } else if (section === 'notif') {
      this.showProfile = false;
      this.showCandidatures = false;
      this.showNotifs = true;
    } else {
      this.showProfile = false;
      this.showCandidatures = true;
      this.showNotifs = false;
    }
  }


  ngOnInit() {
    this.isStudent = this.currentUser.isStudent;
    this.showProfile = true;
    this.showCandidatures = false;
    this.showNotifs = false;
    this.profile = this.currentUser;
    this.profile.photo = this.isStudent ?
      'https://i.pinimg.com/originals/aa/5a/27/aa5a270fc268cb82c66ef12e6def5a09.jpg' :
      'https://www.solutions-numeriques.com/wp-content/uploads/2016/10/sopra-steria1.png';
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
