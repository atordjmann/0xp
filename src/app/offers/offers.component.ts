import { Component, OnInit } from '@angular/core';
import { Offer } from '../../models/Offer';
import { OfferViewService } from './offerView.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  listOffers: Offer[] = [];
  listArticlesSubscription: Subscription;
  
  constructor(private offerViewService : OfferViewService) { }

  ngOnInit() {
    this.listArticlesSubscription = this.offerViewService.listOffersSubject.subscribe(
      (listOffers: any[]) => {
        this.listOffers = listOffers.slice();
      }
    );
    this.offerViewService.emitListOffersSubject();
  }

}
