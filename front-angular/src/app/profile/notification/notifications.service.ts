import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Filter } from 'src/models/Filter';
import { User } from 'src/models';
import { AuthenticationService } from 'src/app/logging/services';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class NotificationsService {
  apiUrl = environment.apiUrl;

  currentUser: User;

  isNotifAdded: Boolean = false;
  isNotifAddedSubject = new Subject<Boolean>();

  currentFilterInOffer: Filter = new Filter();

  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  emitIsNotifAddedSubject() {
    this.isNotifAddedSubject.next(this.isNotifAdded);
  }


  switchIsNotifAdded(isNotifAdded: Boolean) {
    this.isNotifAdded = isNotifAdded;
    this.emitIsNotifAddedSubject()
  }

  majFilterForNotif(currentFilter: Filter) {
    this.currentFilterInOffer = currentFilter
    this.addNotif();
  }

  addNotif() {

    this.httpClient.post<Filter>(this.apiUrl + '/users/addAlert', { "filter": this.currentFilterInOffer, "user": this.currentUser }).subscribe(
      (response) => {
        console.log('Alerte ajoutée');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
}
