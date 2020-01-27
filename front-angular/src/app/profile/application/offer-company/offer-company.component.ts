import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/models/Offer';
import { OfferViewService } from 'src/app/offers/offerView.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offer-company',
  templateUrl: './offer-company.component.html',
  styleUrls: ['./offer-company.component.scss']
})
export class OfferCompanyComponent implements OnInit {

  constructor(private offerViewService : OfferViewService) { }
  listOfferCompany:Offer[] = [];
  listOffersSubscription: Subscription;
  modalSwitch = false;

  ngOnInit() {
    this.offerViewService.getListOfferByCompanyId()

    this.listOffersSubscription = this.offerViewService.customListOffersSubject.subscribe(
      (listOffers: any[]) => {
        this.listOfferCompany = listOffers.slice();
      }
    );
  }

  modalOn() {
    this.modalSwitch = true;
  }
  
  modalOff() {
    this.modalSwitch = false;
  }

  deleteItem(item) {
    this.listOfferCompany.splice(this.listOfferCompany.indexOf(item),1);
    this.modalSwitch = false;
  }

}
