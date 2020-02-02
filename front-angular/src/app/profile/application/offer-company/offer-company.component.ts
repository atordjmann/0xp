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
  isEditingOffer = false;
  offreToBeDeleted: Offer;
  offreToBeEdited: Offer;

  ngOnInit() {
    this.offerViewService.getListOfferByCompanyId()

    this.listOffersSubscription = this.offerViewService.customListOffersSubject.subscribe(
      (listOffers: any[]) => {
        this.listOfferCompany = listOffers.slice();
      }
    );
  }

  deleteElement(offreToBeDeleted : Offer) {
    this.modalSwitch = true;
    this.offreToBeDeleted = offreToBeDeleted;
  }

  cancelDelete(){
    this.offreToBeDeleted = new Offer()
    this.modalSwitch = false;
  }

  deleteItem() {
    this.listOfferCompany.splice(this.listOfferCompany.indexOf(this.offreToBeDeleted),1);
    this.modalSwitch = false;
    this.offerViewService.deleteOffer(this.offreToBeDeleted.id);
  }

  openEditModale(offreToBeEdited : Offer){
    this.isEditingOffer=true;
    this.offreToBeEdited = offreToBeEdited;
  }

  closeEdition(){
    this.isEditingOffer=false;
    this.offreToBeEdited = new Offer();
  }
}
