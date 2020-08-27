import { NgModule } from '@angular/core'

import { MovieComponent } from './movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        MovieComponent,
        MovieDetailsComponent,
        MovieTileComponent,
        MoviesListComponent,
    ], 
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        MovieComponent,
        MovieDetailsComponent,
        MovieTileComponent,
        MoviesListComponent,
    ]
})
export class MovieModule {}