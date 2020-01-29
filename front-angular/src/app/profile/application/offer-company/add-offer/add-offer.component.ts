import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { OfferViewService } from 'src/app/offers/offerView.service';

import { Offer } from 'src/models/Offer';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment, Moment} from 'moment';
import { MatDatepicker } from '@angular/material';
const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class AddOfferComponent implements OnInit {

  editor = ClassicEditor;

  typeList: string[] = ['Stage', 'Alternance', 'Premier emploi'];
  timeList: string[] = ['1-2 mois', '6 mois', '2 ans'];
  sectorList: string[] = ['Audit / Conseil', 'Informatique', 'Mécanique'];
  listCountries: string[] = ['France', 'Espagne', 'Angleterre', 'Inde', 'Chine']
 
  newOffer: Offer = new Offer()
  dateFromDate : Date = new Date();
  dateStart = new FormControl(moment());
  locationCountry:String;
  locationCity:String;

  listSoftSkills = [
    {
      display: 'Patience',
      value: 'Patience'
    },
    {
      display: 'Organisation',
      value: 'Organisation'
    }
  ];
  softSkillForm = new FormGroup({
    selected: new FormControl()
  });
  
  listDomains = [
    {
      display: 'Intelligence Artificielle',
      value: 'intelligenceArtificielle'
    },
    {
      display: 'Web Development',
      value: 'devWeb'
    }
  ];
  domainsForm = new FormGroup({
    selected: new FormControl()
  });

  constructor(private offerViewService : OfferViewService) { }

  ngOnInit() {
  }

  addOffer() {

    this.newOffer.start_date_ts = ""+this.dateFromDate.getTime()
    this.newOffer.created_date_ts=""+(new Date()).getTime() //TODO : Changer les types pour que rien soit cassé même si ça fonctionne
    this.newOffer.location=this.locationCity+", "+this.locationCountry
    console.log(this.newOffer);
    this.offerViewService.addOffer(this.newOffer);
  }
  
  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.dateStart.value;
    ctrlValue.year(normalizedYear.year());
    this.dateStart.setValue(ctrlValue);
    this.dateFromDate.setUTCFullYear(this.dateStart.value._d.getUTCFullYear());
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.dateStart.value;
    ctrlValue.month(normalizedMonth.month());
    this.dateStart.setValue(ctrlValue);
    datepicker.close();
    this.dateFromDate.setMonth(this.dateStart.value._d.getMonth());
  }

  getSelectedOptions(key:String, selected) {
    if (key==='softskill'){
      this.newOffer.softSkills = selected;
    } else {
      this.newOffer.domains = selected;
    }
  }
}
