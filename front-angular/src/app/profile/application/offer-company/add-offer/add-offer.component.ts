import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/models/Offer';
import { OfferViewService } from 'src/app/offers/offerView.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss']
})
export class AddOfferComponent implements OnInit {
 
  offer: Offer = new Offer()

  constructor(private offerViewService : OfferViewService) { }

  ngOnInit() {
  }

  addOffer() {
    console.log(this.offer);
    this.offerViewService.addOffer(this.offer);
  }

}
