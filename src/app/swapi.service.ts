import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environments/environment'
import 'rxjs/add/operator/map';

@Injectable()
export class swapiService {

    endpoint: String = environment.endpoint;

    constructor(private _http: Http) {

    }

    getFilms() {
        const path = `/films/`;
        return this._http.get(this.endpoint + path).map(res => res.json())
    }

    getFilmDetails(filmNumber: any) {
        const path = `/films/${filmNumber}`;
        return this._http.get(this.endpoint + path).map(res => res.json())
    }

    getDataFromUrl(url: any) {
        const path = url;
        return this._http.get(path).map(res => res.json())
    }
}
