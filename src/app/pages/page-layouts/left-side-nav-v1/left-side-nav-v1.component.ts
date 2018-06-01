import { Component, ElementRef, HostListener, OnInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { GlobalState } from '../../../app.state';
import { ConfigService } from '../../../shared/services/config/config.service';
import { MatDrawer } from '@angular/material';
import { TabsetComponent } from 'ngx-bootstrap';
import { swapiService } from '../../../swapi.service';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { LeftSidebarComponent } from '../../../layout/left-sidebar/left-sidebar.component'

@Component({
    selector: '.content_inner_wrapper',
    templateUrl: './left-side-nav-v1.component.html',
    styleUrls: ['./left-side-nav-v1.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    providers: [swapiService, LeftSidebarComponent]
})
export class LeftSideNavV1Component implements OnInit, OnDestroy {
    @ViewChild('staticTabs') staticTabs: TabsetComponent;
    @ViewChild('leftSidenav1') leftSidenav1: MatDrawer;
    @ViewChild('menuTabs') private allMElementRef;
    navMode = 'side';
    filmDetail = [];
    personas = [];
    subscription: any;
    filmId: any;
    filmNumber: any;
    // tabLabels = [
    //     {label: 'Sidenav item 1', active: true},
    //     {label: 'Sidenav item 2', active: false},
    //     {label: 'Sidenav item 3', active: false}
    // ];

    // selectTab(film: any, tab_id: number) {
    //     this.films.forEach(film => film.active = false);
    //     this.films.find(t => t === film).active = true;
    //     this.staticTabs.tabs[tab_id].active = true;
    // }

    constructor(public config: ConfigService,
        private _elementRef: ElementRef,
        private _state: GlobalState,
        private _swapiService: swapiService,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {
        if (window.innerWidth < this.config.breakpoint.desktop) {
            this.navMode = 'over';
            this.leftSidenav1.opened = false;
        }
        if (window.innerWidth > this.config.breakpoint.desktop) {
            this.navMode = 'side';
            this.leftSidenav1.open();
        }
        this.subscription = this._route.params.subscribe(params => {
            this.filmId = params['id'];
            console.log(this.filmId);
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
            console.log('ei', this.filmNumber);
            this.getInfo();
        });

    }
    getInfo() {
        this._swapiService.getFilmDetails(this.filmNumber)
            .subscribe(data => {
                this.filmDetail = data;
                this.personas = data.characters;
                console.log('wow', this.filmDetail);
            });
    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < this.config.breakpoint.desktop) {
            this.navMode = 'over';
            this.leftSidenav1.close();
        }
        if (event.target.innerWidth > this.config.breakpoint.desktop) {
            this.navMode = 'side';
            this.leftSidenav1.open();
        }
    }
}
