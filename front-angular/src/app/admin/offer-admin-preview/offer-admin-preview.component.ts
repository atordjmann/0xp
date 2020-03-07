import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'src/models/Offer';

@Component({
  selector: 'app-offer-admin-preview',
  templateUrl: './offer-admin-preview.component.html',
  styleUrls: ['./offer-admin-preview.component.scss']
})
export class OfferAdminPreviewComponent implements OnInit {

  @Input() offer: Offer;
  strDateCreated: string;

  constructor() { }

  ngOnInit() {
    this.defineStrDateCreated();
  }

  defineStrDateCreated() {
    this.strDateCreated = 'Aujourd\'hui'
    const deltaTs = (new Date()).getTime() - +this.offer.created_date;
    //Si plus d'un an
    if (deltaTs > 1000 * 60 * 60 * 24 * 635) {
      this.strDateCreated = 'Il y a ' + Math.floor(deltaTs / (1000 * 60 * 60 * 24 * 365)) + ' ans'
    }
    //Si plusieurs mois
    else if (deltaTs > 1000 * 60 * 60 * 24 * 30) {
      this.strDateCreated = 'Il y a ' + Math.floor(deltaTs / (1000 * 60 * 60 * 24 * 30)) + ' mois'
    }
    //Si ce mois ci
    else if (deltaTs > 1000 * 60 * 60 * 24 * 7) {
      this.strDateCreated = 'Ce mois ci'
    }
    //Si cette semaine
    else if (deltaTs > 1000 * 60 * 60 * 24) {
      this.strDateCreated = 'Cette semaine'
    }
  }

}
