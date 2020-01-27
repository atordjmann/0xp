import { OfferViewService } from './../offerView.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Offer } from 'src/models/Offer';
import { CompanyViewService } from './companyView.service';
import { SafeStyle,DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {

  offer: Offer;
  colorScore:SafeStyle;

  constructor(private route: ActivatedRoute, private offerViewService : OfferViewService, private sanitizer: DomSanitizer, private companyViewService: CompanyViewService) { }

  isModalopen = false;

  public notNull(o) {
    if(typeof o === 'undefined'){
      return false;
    } else if (o === null){
      return false;
    } else {
      return true;
    }
  };

  ngOnInit() {
    window.scroll(0,0);
    let idOffer = this.route.snapshot.params['id'];
    this.offer = this.offerViewService.getOfferById(idOffer);
    this.colorScore = this.sanitizer.bypassSecurityTrustStyle("color:"+this.defineColor(this.offer.matchingScore));

    //appeler CompanyViewService
  }

  openOrClose() {
    this.isModalopen=!this.isModalopen
  }
  
  defineColor(percentage : Number){
    percentage = +percentage/100;
    let percentColors = [
      { pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
      { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
      { pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } } ];
    
    for (var i = 1; i < percentColors.length - 1; i++) {
      if (percentage < percentColors[i].pct) {
          break;
      }
    }
    var lower = percentColors[i - 1];
    var upper = percentColors[i];
    var range = upper.pct - lower.pct;
    var rangePct = (+percentage - lower.pct) / range;
    var pctLower = 1 - rangePct;
    var pctUpper = rangePct;
    var color = {
      r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
      g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
      b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };
    return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
  }

}