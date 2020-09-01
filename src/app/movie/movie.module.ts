import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FeaturedMovieComponent } from '../featured-movie/featured-movie.component';
import { MovieComponent } from './movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

@NgModule({
    declarations: [
        FeaturedMovieComponent,
        MovieComponent,
        MovieDetailsComponent,
        MovieTileComponent,
        MoviesListComponent,
    ], 
    imports: [
        RouterModule,
        MovieRoutingModule,
        CommonModule,
        SharedModule,
    ],
    exports: [
        FeaturedMovieComponent,
        MovieComponent,
        MovieTileComponent,
        MoviesListComponent,
    ]
})
export class MovieModule {}