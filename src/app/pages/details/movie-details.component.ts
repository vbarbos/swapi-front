import { Component, OnInit, OnDestroy } from '@angular/core';
import { swapiService } from '../../swapi.service';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: '.content_inner_wrapper',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss'],
    providers: [swapiService]
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
    filmDetail = [];
    personas = [];
    spaceships = [];
    subscription: any;
    filmId: any;
    filmNumber: any;
    characters = [];
    starships = [];

    constructor(private _swapiService: swapiService,
        private _route: ActivatedRoute) { }

    ngOnInit() {
        this.subscription = this._route.params.subscribe(params => {
            this.filmId = params['id'];

            switch (this.filmId) {
                case '4':
                    this.filmNumber = '1';
                    break;
                case '2':
                    this.filmNumber = '5';
                    break;
                case '1':
                    this.filmNumber = '4';
                    break;
                case '3':
                    this.filmNumber = '6';
                    break;
                case '6':
                    this.filmNumber = '3';
                    break;
                case '5':
                    this.filmNumber = '2';
                    break;
                case '7':
                    this.filmNumber = '7';
                    break;
            }

            this.getInfo();
            this.characters = [];
            this.starships = [];
        });
    }
    getInfo() {
        this._swapiService.getFilmDetails(this.filmNumber)
            .subscribe(data => {
                this.filmDetail = data;
                this.personas = data.characters;
                this.spaceships = data.starships;

            });
    }

    loadCharacters() {
        this.characters = [];
        for (let i = 0; i < this.personas.length; i++) {
            this._swapiService.getCharacters(this.personas[i])
                .subscribe(data => {
                    this.characters.push(data);
                });
        }
    }

    loadStarships() {
        this.starships = [];
        for (let i = 0; i < this.spaceships.length; i++) {
            this._swapiService.getCharacters(this.spaceships[i])
                .subscribe(data => {
                    this.starships.push(data);

                });
        }
    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
