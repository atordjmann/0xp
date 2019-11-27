import { Component, OnInit } from '@angular/core';
import { Offer } from '../../modeles/offer';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  listOffers: Offer[] = [];
  constructor() { }

  ngOnInit() {
    let offer1 = new Offer()
    offer1.title = "Junior Développeur Full Stack (H/F)"
    offer1.srcImgCompany = "http://www.portify.fr/wp-content/uploads/2019/07/logo-sopra-steria.png"
    offer1.company = "Sopra Steria"
    offer1.date = new Date();
    offer1.domain = "IT / Conseil"
    offer1.location = "Marseille, France"
    offer1.type = "Stage 4-6 Mois"
    this.listOffers.push(offer1)

    let offer2 = new Offer()
    offer2.title = "Designer UI/UX Web (H/F)"
    offer2.srcImgCompany = "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/ALTEN_logo.svg/1200px-ALTEN_logo.svg.png"
    offer2.company = "Alten"
    offer2.date = new Date();
    offer2.domain = "Graphisme / Design"
    offer2.location = "Paris, France"
    offer2.type = "Alternance 3 ans"
    this.listOffers.push(offer2)
  }

}
