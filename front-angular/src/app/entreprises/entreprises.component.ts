import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/models';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})
export class EntreprisesComponent implements OnInit {

  companiesList: Company[];
  constructor(public companyService: CompanyService) { }

  ngOnInit() {

    // TODO spinner
    this.companyService.getAll().subscribe(
      value => {
          this.companiesList = value;
      },
      error => {
          console.log('Erreur ! : ' + error);
      }
    );
  }


}
