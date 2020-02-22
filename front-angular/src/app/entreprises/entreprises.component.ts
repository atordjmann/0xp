import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';
import {Company} from '../../models';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})

export class EntreprisesComponent implements OnInit {

  companiesList: Company[];
  unfilteredCompaniesList: Company[];
  constructor(public companyService: CompanyService) { }

  ngOnInit() {

    // TODO spinner
    this.companyService.getAll().subscribe(
      value => {
          this.companiesList = value;
          this.unfilteredCompaniesList = value;
      },
      error => {
          console.log('Erreur ! : ' + error);
      }
    );
  }

  filter(input){
    this.companiesList = this.unfilteredCompaniesList;
    const requete = input.target.value;
    let list = this.unfilteredCompaniesList.filter((el) => {
      return el.name.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
    });
    this.companiesList = list;
  }


}
