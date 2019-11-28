import { Injectable } from '@angular/core';
import { Offer } from '../../models/Offer';
import { Subject } from 'rxjs/Subject';
import { Filter } from 'src/models/Filter';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class OfferViewService {


    apiUrl = environment.apiUrl;

    listOffers : Offer[];
    listOffersSubject = new Subject<Offer[]>();

    isLoading:Boolean=false;
    isLoadingSubject = new Subject<Boolean>();

    constructor(private httpClient : HttpClient) { }

    fillListOffers(){
        this.emitisLoadingSubject(true)
        this.httpClient.get<any>(this.apiUrl+"/offres").subscribe(
            (response) => {
                this.listOffers = [];
                console.log("Found "+response.length+" offers")
                response.forEach((offerJson)=>{
                    var offer = new Offer()
                    offer.fromHashMap(offerJson)
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

    filterListOffers(currentFilter : Filter){
        this.emitisLoadingSubject(true)
        var query=currentFilter.toQuery()
        if (query===""){
            this.emitisLoadingSubject(false)
            return;
        }

        console.log(this.apiUrl+"/offres/filtered?"+query)
        this.httpClient.get<any>(this.apiUrl+"/offres/filtered?"+query).subscribe(
            (response) => {
                this.listOffers = [];
                console.log("Found "+response.length+" offers matching the filter")
                response.forEach((offerJson)=>{
                    var offer = new Offer()
                    offer.fromHashMap(offerJson)
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
        if (currentFilter.toQuery()!=""){
            this.filterListOffers(currentFilter)
        } else{
            this.fillListOffers()
        }
    }
}