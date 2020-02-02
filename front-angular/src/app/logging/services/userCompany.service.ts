import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { UserCompany } from '../../../models';

@Injectable({ providedIn: 'root' })
export class UserCompanyService {
    constructor(private http: HttpClient) { }

    apiUrl = environment.apiUrl;

    getAll() {
        return this.http.get<UserCompany[]>(this.apiUrl + '/users');
    }

    register(user: UserCompany) {
        return this.http.post(this.apiUrl + '/users/register', user);
    }

    delete(id: string) {
        return this.http.delete(this.apiUrl + '/users/' + id);
    }
}
