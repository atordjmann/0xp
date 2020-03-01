import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/models/Offer';

@Component({
  selector: 'app-offer-admin',
  templateUrl: './offer-admin.component.html',
  styleUrls: ['./offer-admin.component.scss']
})
export class OfferAdminComponent implements OnInit {

  listOffers: Offer[] = [];
  constructor() { }

  ngOnInit() {
  }

}
