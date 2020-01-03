import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isStudent: boolean;
  isCompany: boolean;
  showProfile: boolean;
  showCandidatures: boolean;
  showNotifs: boolean;
  profile: any;

  constructor() { }
  clicSection = (e, section) => {
    const buttons = document.getElementsByClassName('bar-button');
    for (let i=0 ; i < buttons.length ; i++) {
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
    this.isStudent = false;
    this.isCompany = true;
    this.showProfile = true;
    this.showCandidatures = false;
    this.showNotifs = false;
    this.profile = {
      firstname: 'Brad',
      lastname: 'Pitt',
      photo: 'https://i.pinimg.com/originals/aa/5a/27/aa5a270fc268cb82c66ef12e6def5a09.jpg'
    };
  }

}
