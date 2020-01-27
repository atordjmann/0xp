import { OfferViewService } from './../offerView.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Offer } from 'src/models/Offer';
import { CompanyViewService } from './companyView.service';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {

  offer: Offer;

  constructor(private route: ActivatedRoute, private offerViewService : OfferViewService, private companyViewService: CompanyViewService) { }

  isModalopen = false;

  ngOnInit() {
    let idOffer = this.route.snapshot.params['id'];
    this.offer = this.offerViewService.getOfferById(idOffer)

    //appeler CompanyViewService
  }

  openOrClose() {
    this.isModalopen=!this.isModalopen
  }

}