// Angular
// https://angular.io/
import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Angular Material
// https://material.angular.io/
import {MalihuScrollbarModule} from 'ngx-malihu-scrollbar';
// ngx-bootstrap4
// http://valor-software.com/ngx-bootstrap/index-bs4.html#/
import {TabsModule} from 'ngx-bootstrap/tabs';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ModalModule} from 'ngx-bootstrap/modal';
import {PopoverModule} from 'ngx-bootstrap/popover';
// UI Shared Components
import {FooterComponent} from '../layout/footer/footer.component';
import {AppBackdropComponent} from './components/app_backdrop/app_backdrop.component';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    MatTabsModule,
} from '@angular/material';

import {SocialCardComponent} from './components/cards/social-card/social-card.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatIconModule,
        MatRadioModule,
        MatRippleModule,
        MatSidenavModule,
        MatTabsModule,
        BsDropdownModule.forRoot(),
        AlertModule.forRoot(),
        TabsModule.forRoot(),
        MalihuScrollbarModule.forRoot(),
        ModalModule.forRoot(),
        PopoverModule.forRoot()
    ],
    declarations: [
        AppBackdropComponent,
        FooterComponent,
        SocialCardComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatIconModule,
        SocialCardComponent,
        MatRadioModule,
        MatRippleModule,
        MatSidenavModule,
        MatTabsModule,
        AppBackdropComponent,
        ReactiveFormsModule,
        TabsModule,
        BsDropdownModule,
        AlertModule,
        MalihuScrollbarModule,
        ModalModule,
        PopoverModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
