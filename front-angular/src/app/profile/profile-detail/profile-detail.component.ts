import { Component, OnInit, Input } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UserService } from 'src/app/logging/services';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  @Input() details: any;
  @Input() type: boolean;

  profileEdit: any;
  isStudent: boolean;
  isEdition: boolean;
  editor = ClassicEditor;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isEdition = false;
    this.isStudent = this.details.isStudent;
  }

  editionOn(){
    this.isEdition = true;
    this.profileEdit = Object.assign({}, this.details);
  }

  editionOff(){
    this.isEdition = false;
  }

  updateProfile(){
    this.details = Object.assign({}, this.profileEdit);
    this.userService.update(this.details);
    this.editionOff();
  }

}
