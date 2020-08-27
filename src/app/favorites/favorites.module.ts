import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieModule } from '../movie/movie.module';

import { FavoritesComponent } from './favorites.component';


@NgModule({
    declarations: [
        FavoritesComponent
    ], 
    imports: [
        RouterModule,
        CommonModule,
        MovieModule,
    ],
    exports: [
        FavoritesComponent
    ]
})
export class FavoritesModule {}