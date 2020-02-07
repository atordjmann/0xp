import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  @Input() details: any;
  @Input() type: boolean;
  isStudent: boolean;
  constructor() { }

  ngOnInit() {
    this.isStudent = this.details.isStudent;
  }

}
