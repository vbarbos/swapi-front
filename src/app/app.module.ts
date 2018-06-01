import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ResponsiveModule} from 'ng2-responsive';
import {AppComponent} from './app.component';
import {AppState, InternalStateType} from './app.service';
import {GlobalState} from './app.state';
import {ServicesModule} from './shared/services/services.module';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

// Application wide providers
const APP_PROVIDERS = [AppState, GlobalState, Title];

export type StoreType = {
    state: InternalStateType;
    restoreInputValues: () => void;
    disposeOldHosts: () => void;
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ServicesModule,
        ResponsiveModule,
        SharedModule.forRoot(),
        AppRoutingModule
    ],
    providers: [APP_PROVIDERS],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(public appState: AppState) {
    }
}
