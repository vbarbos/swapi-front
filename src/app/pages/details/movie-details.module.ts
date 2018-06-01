import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details.component';
import { SharedModule } from '../../shared/shared.module';


const MOVIEDETAILS_ROUTE = [
    { path: '', component: MovieDetailsComponent },
];

@NgModule({
    declarations: [MovieDetailsComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(MOVIEDETAILS_ROUTE)
    ]

})
export class MovieDetailsModule { }
