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
  isLoading: boolean;
  isLoadingSubscription: Subscription;

  sortedBy:String;
  isSortingPopupOpen:Boolean=false;

  constructor(private offerViewService: OfferViewService) { }

  ngOnInit() {
    this.sortedBy="matchingScore";
    this.offerViewService.fillListOffers();
    this.listArticlesSubscription = this.offerViewService.listOffersSubject.subscribe(
      (listOffers: any[]) => {
        this.listOffers = listOffers.slice();
      }
    );
    this.offerViewService.emitListOffersSubject();
    this.isLoadingSubscription = this.offerViewService.isLoadingSubject.subscribe(
      (isLoading: boolean) => {
        this.isLoading = isLoading;
      }
    );
  }

  openOrClosePopup(){
    this.isSortingPopupOpen=!this.isSortingPopupOpen;
  }
  
  changeSortBy(key:String){
    if(key!=this.sortedBy){
      this.offerViewService.sortArray(this.listOffers,key)
      this.sortedBy=key;
      this.isSortingPopupOpen=false;
    }
  }

}
