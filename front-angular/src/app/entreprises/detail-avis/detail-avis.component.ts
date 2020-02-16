import { Company } from 'src/models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/company.service';

@Component({
  selector: 'app-detail-avis',
  templateUrl: './detail-avis.component.html',
  styleUrls: ['./detail-avis.component.scss']
})
export class DetailAvisComponent implements OnInit {

  companyId: string;
  company: Company;
  constructor(private route: ActivatedRoute,
              public companyService: CompanyService) { }

  ngOnInit() {
    this.companyId = this.route.snapshot.params.id;
    this.companyService.getById(this.companyId).subscribe(
      value => {
          this.company = value;
      },
      error => {
          console.log('Erreur ! : ' + error);
      }
    );

  }

}
