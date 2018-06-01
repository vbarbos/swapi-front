import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {GlobalState} from '../../../app.state';
import {ConfigService} from '../../../shared/services/config/config.service';

@Component({
    selector: '.content_inner_wrapper',
    templateUrl: './detached-toolbar-right.component.html',
    styleUrls: ['./detached-toolbar-right.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class DetachedToolbarRightComponent implements OnInit {

    constructor(public config: ConfigService, private _elementRef: ElementRef, private _state: GlobalState) {
    }

    ngOnInit() {
    }
}
