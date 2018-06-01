import {
    Component,
    ViewEncapsulation,
    OnInit,
    trigger,
    state,
    style,
    transition,
    animate,
    ElementRef,
    HostListener
} from '@angular/core';
import { GlobalState } from '../../app.state';
import { ConfigService } from '../../shared/services/config/config.service';
import { swapiService } from '../../swapi.service'
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-sidebar',
    templateUrl: './left-sidebar.component.html',
    styleUrls: ['./left-sidebar.component.scss'],
    providers: [swapiService]
})
export class LeftSidebarComponent implements OnInit {
    public scrollbarOptions = {
        axis: 'y',
        theme: 'minimal',
        scrollInertia: 0,
        mouseWheel: { preventDefault: true }
    };
    movies = [];
    url: string;
    filmDetails: any;

    constructor(public config: ConfigService,
        private _elementRef: ElementRef,
        private _state: GlobalState,
        private _swapiService: swapiService) {
        this._state.subscribe('app.isCollapsed', isCollapsed => {
            this.config.appLayout.isApp_SidebarLeftCollapsed = isCollapsed;
        });
    }
    ngOnInit() {
        this._swapiService.getFilms()
            .subscribe(data => {
                this.movies = data.results;

            });
    }

    getFilmDetails(i: any) {
        this.url = this.movies[i].url;
        this._swapiService.getFilmDetails(this.url)
            .subscribe(data => {
                this.filmDetails = data;

            });
    }

    toggleMenuSideabar() {
        this.config.appLayout.isApp_SidebarLeftCollapsed = !this.config.appLayout.isApp_SidebarLeftCollapsed;
        this._state.notifyDataChanged('app.isCollapsed', this.config.appLayout.isApp_SidebarLeftCollapsed);
        return false;
    }
    @HostListener('window:resize')
    public onWindowResize(): void { }
}
