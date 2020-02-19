import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Avis } from 'src/models';

@Injectable({ providedIn: 'root' })
export class AvisService {
    constructor(private http: HttpClient) { }

    apiUrl = environment.apiUrl;

    getAll() {
        return this.http.get<Avis[]>(this.apiUrl + '/avis');
    }

    add(description: string, note: string, idCompany: string) {
        let avis = new Avis();
        avis.description = description;
        avis.idCompany = idCompany;
        avis.note = note
        return this.http.post(this.apiUrl + '/avis', avis);
    }

    getById(id: any) {
        return this.http.get<Avis>(this.apiUrl + '/avis/' + id);
    }

    getAllByCompanyId(id: any) {
        return this.http.get<Avis[]>(this.apiUrl + '/avis/company/' + id);
    }
}
