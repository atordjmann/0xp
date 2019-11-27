import { Component, OnInit, Input } from '@angular/core';

import { Offer } from '../../../modeles/offer';

@Component({
  selector: 'app-offer-preview',
  templateUrl: './offer-preview.component.html',
  styleUrls: ['./offer-preview.component.scss']
})
export class OfferPreviewComponent implements OnInit {
  @Input() offer: Offer;

  constructor() { }

  ngOnInit() {
  }

}
