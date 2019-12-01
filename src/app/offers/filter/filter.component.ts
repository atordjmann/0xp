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
  constructor(private offerViewService : OfferViewService) { }

  ngOnInit() {
  }

  filter(){
    this.offerViewService.filter(this.currentFilter)
  }
}
