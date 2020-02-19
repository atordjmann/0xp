import { OfferViewService } from 'src/app/offers/offerView.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zero-xp';

  constructor(private offerViewService : OfferViewService) {}

  ngOnInit() {
  }
}
