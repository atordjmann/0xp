import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/models/Offer';
import { Subscription } from 'rxjs';
import { OfferViewService } from 'src/app/offers/offerView.service';

@Component({
  selector: 'app-offer-admin',
  templateUrl: './offer-admin.component.html',
  styleUrls: ['./offer-admin.component.scss']
})
export class OfferAdminComponent implements OnInit {

  listOffers: Offer[] = [];
  unfilteredListOffers: Offer[] = [];
  listOffersSubscription: Subscription;
  isLoadingSubscription: Subscription;
  isLoading: boolean;
  constructor(private offerViewService: OfferViewService) { }

  ngOnInit() {
    this.offerViewService.fillListOffers();
    this.listOffersSubscription = this.offerViewService.filteredListOffersSubject.subscribe(
      (listOffers: any[]) => {
        this.listOffers = listOffers.slice();
        this.unfilteredListOffers = this.listOffers;
      }
    );
    this.offerViewService.emitListOffersSubject();
    this.isLoadingSubscription = this.offerViewService.isLoadingSubject.subscribe(
      (isLoading: boolean) => {
        this.isLoading = isLoading;
      }
    );
  }

  filter(input){
    this.listOffers = this.unfilteredListOffers;
    const requete = input.target.value;
    let list = this.unfilteredListOffers.filter((el) => {
      return el.company.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
    });
    this.listOffers = list;
  }

}
