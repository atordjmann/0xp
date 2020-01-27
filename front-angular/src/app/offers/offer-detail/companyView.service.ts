import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Company } from '../../../models/Company';

@Injectable()
export class CompanyViewService {

    listCompanies: Company[] = [];
    CompanySubject = new Subject<Company[]>();  // utile ?

    constructor(private httpClient: HttpClient) {}

    fillListCompanies() {}

    getCompanyById(id: Number) {
        const company : Company = this.listCompanies.find(
            (s) => {
                return s.id === id;
            });
        return company
    }

}