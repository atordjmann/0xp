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
    this.listOffers.push(new Offer(3, 'Développeur fullstack'));
    this.listOffers.push(new Offer(4, 'Ingénieur R&D'));
    this.listOffers.push(new Offer(5, 'Développeur back-end'));
    this.listOffers.push(new Offer(6, 'Développeur javascript'));
  }

}
