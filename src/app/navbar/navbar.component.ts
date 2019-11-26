import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
  }

  openLoggingModal() {
    this.globalService.manageModale();
  }

}
