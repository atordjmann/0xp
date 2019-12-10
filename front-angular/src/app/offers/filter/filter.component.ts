import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import { OfferViewService } from '../offerView.service';

import { Filter } from 'src/models/Filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  currentFilter: Filter = new Filter();

  typeList: string[] = ['Stage', 'Alternance', 'Emploi'];
  timeList: string[] = ['1-2 mois', '6 mois'];
  domainList: string[] = ['Audit / Conseil', 'Informatique', 'Mécanique'];

  isMoreFilterOpen = false;

  constructor(private offerViewService: OfferViewService) { }

  ngOnInit() {
    this.currentFilter.type = 'All';
    this.currentFilter.time = 'All';
    this.currentFilter.domain = 'All';
  }

  filter() {
    if (this.currentFilter.type === 'All') {
      this.currentFilter.type = '';
    }
    if (this.currentFilter.time === 'All') {
      this.currentFilter.time = '';
    }
    if (this.currentFilter.domain === 'All') {
      this.currentFilter.domain = '';
    }
    this.offerViewService.filter(this.currentFilter);
    this.isMoreFilterOpen = false;
  }

  manageMoreFilter() {
    this.isMoreFilterOpen = !this.isMoreFilterOpen;
  }
}
