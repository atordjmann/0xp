import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GlobalService {

    isProfilOpen: Boolean = false;
    isProfilOpenSubject = new Subject<Boolean>();

    constructor() { }

    emitIsProfilOpenSubject() {
        this.isProfilOpenSubject.next(this.isProfilOpen);
    }

    switchIsProfilOpen(isProfilOpen: Boolean) {
        this.isProfilOpen = isProfilOpen;
        this.emitIsProfilOpenSubject();
    }
}
