import { Injectable } from '@angular/core';
import { Offer } from '../../models/Offer';
import { Subject } from 'rxjs/Subject';
import { Filter } from 'src/models/Filter';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class OfferViewService {


    apiUrl = environment.apiUrl;

    listOffers: Offer[] = [];
    listOffersSubject = new Subject<Offer[]>();

    isLoading = false;
    isLoadingSubject = new Subject<boolean>();

    customListOffers : Offer[] = [];
    customListOffersSubject = new Subject<Offer[]>();

    constructor(private httpClient: HttpClient) { }

    fillListOffers() {
        this.emitisLoadingSubject(true);
        this.httpClient.get<any>(this.apiUrl + '/offres').subscribe(
            (response) => {
                this.listOffers = [];
                console.log('Found ' + response.length + ' offers');
                response.forEach((offerJson) => {
                    const offer = new Offer();
                    offer.fromHashMap(offerJson);
                    this.listOffers.push(offer);
                });
                console.log(this.listOffers)
                this.emitListOffersSubject();
                this.emitisLoadingSubject(false);
            },
            (error) => {
                console.log('Erreur ! : ' + error);
            }
        );
    }

    filterListOffers(currentFilter: Filter) {
        this.emitisLoadingSubject(true);
        const query = currentFilter.toQuery();
        if (query === '') {
            this.emitisLoadingSubject(false);
            return;
        }

        console.log(this.apiUrl + '/offres/filtered?' + query);
        this.httpClient.get<any>(this.apiUrl + '/offres/filtered?' + query).subscribe(
            (response) => {
                this.listOffers = [];
                console.log('Found ' + response.length + ' offers matching the filter');
                response.forEach((offerJson) => {
                    const offer = new Offer();
                    offer.fromHashMap(offerJson);
                    this.listOffers.push(offer);
                });
                this.emitListOffersSubject();
                this.emitisLoadingSubject(false);
            },
            (error) => {
                console.log('Erreur ! : ' + error);
            }
        );
    }

    emitListOffersSubject() {
        this.sortArray(this.listOffers, 'matchingScore')
        this.listOffersSubject.next(this.listOffers.length!==0 ? this.listOffers.slice() : []);
    }

    emitisLoadingSubject(isLoading: boolean) {
        this.isLoadingSubject.next(isLoading);
    }

    emitCustomListOffersSubject() {
        this.customListOffersSubject.next(this.customListOffers.length!==0 ? this.customListOffers.slice() : []);
    }

    filter(currentFilter: Filter) {
        console.log(currentFilter);
        console.log(currentFilter.toQuery());
        if (currentFilter.toQuery() !== '') {
            this.filterListOffers(currentFilter);
        } else {
            this.fillListOffers();
        }
    }

    getOfferById(id: String) {
        const offer : Offer = this.listOffers.find(
            (s) => {
                return s.id === id;
            });
        return offer;
    }

    sortArray(array : Offer[], key:String){
        if (key=="matchingScore"){
            array.sort(function(a:Offer, b:Offer) {
                return +b.matchingScore - +a.matchingScore; 
            });
        } else if (key=="remuneration"){
            array.sort(function(a:Offer, b:Offer) {
                return +b.remuneration - +a.remuneration; 
            });
        } else if (key=="created_date"){
            array.sort(function(a:Offer, b:Offer) {
                return +b.created_date - +a.created_date; 
            });
        }
    }
    
    getListOfferByCompanyId(){
        this.httpClient.get<any>(this.apiUrl + '/offres/byCompanyId').subscribe(
            (response) => {
                this.customListOffers = [];
                console.log('Found ' + response.length + ' offers matching the company');
                response.forEach((offerJson) => {
                    const offer = new Offer();
                    offer.fromHashMap(offerJson);
                    this.customListOffers.push(offer);
                });
                this.emitCustomListOffersSubject()
            },
            (error) => {
                console.log('Erreur ! : ' + error);
            }
        );
    }

    addOffer(offer: Offer) {
        console.log(offer)
        console.log(JSON.stringify(offer))
        this.httpClient.post<Offer>(this.apiUrl + '/offres/post',offer).subscribe(
            (response) => {
                console.log('offre ajoutée avec succès')
            },
            (error) => {
                console.log('Erreur ! : ' + error);
            }
        );

    }


    deleteOffer(id: String) {
        console.log(id)
        this.httpClient.delete<String>(this.apiUrl + '/offres/deleteById/'+id).subscribe(
            (response) => {
                console.log('Offre ' + id + ' supprimée')
            },
            (error) => {
                console.log('Erreur ! : ' + error);
            }
        );

    }

}
