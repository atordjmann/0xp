import { Injectable } from '@angular/core';
import { Offer } from '../../models/Offer';
import { Subject } from 'rxjs/Subject';
import { Filter } from 'src/models/Filter';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OfferViewService {


    listOffers : Offer[];
    listOffersSubject = new Subject<Offer[]>();

    isLoading:Boolean=false;
    isLoadingSubject = new Subject<Boolean>();

    constructor(private httpClient : HttpClient) { }

    fillListOffers(){
        this.emitisLoadingSubject(true)
        this.httpClient.get<any>("http://localhost:3000/offres").subscribe(
            (response) => {
                this.listOffers = [];
                console.log("Found "+response.length+" offers")
                response.forEach((offerJson)=>{
                    var offer = new Offer()
                    offer.fromHashMap(offerJson)
                    offer.print()
                    this.listOffers.push(offer)
                })
                this.emitListOffersSubject();
                this.emitisLoadingSubject(false)
            },
            (error) => {
                console.log('Erreur ! : ' + error);
            }
        );
        
    }

    emitListOffersSubject(){
        this.listOffersSubject.next(this.listOffers.slice());
    }

    emitisLoadingSubject(isLoading : Boolean){
        this.isLoadingSubject.next(isLoading);
    }

    filter(currentFilter : Filter){
        currentFilter.print();
        this.fillListOffers()
    }
}