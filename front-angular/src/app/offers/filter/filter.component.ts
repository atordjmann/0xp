import { Component, OnInit } from '@angular/core';
import { OfferViewService } from '../offerView.service';
import { Filter } from 'src/models/Filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  currentFilter :Filter = new Filter();
  mapOpenFilter = {
    'type': false,
    'time':false,
    'domain':false
  }
  isMoreFilterOpen = false;

  constructor(private offerViewService : OfferViewService) { }

  ngOnInit() {
  }

  filter(){
    this.offerViewService.filter(this.currentFilter)
    this.isMoreFilterOpen=false;
  }

  openFilter(keySelected : string){
    var isClosingAction = false
    //Si on veut fermer un filtre actif
    if(this.mapOpenFilter[keySelected]){
      isClosingAction = true;
    }
    Object.keys(this.mapOpenFilter).forEach((keyFilter) => {
      this.mapOpenFilter[keyFilter]=false;
    })
    if(!isClosingAction){
      this.mapOpenFilter[keySelected]=true;
    }
  }

  manageMoreFilter(){
    this.isMoreFilterOpen=!this.isMoreFilterOpen;
  }
}
