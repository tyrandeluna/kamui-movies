import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieModule } from '../movie/movie.module';

import { AllCategoriesComponent } from './all-categories.component';

@NgModule({
    declarations: [
        AllCategoriesComponent
    ], 
    imports: [
        RouterModule,
        CommonModule,
        MovieModule,
    ],
    exports: [
        AllCategoriesComponent
    ]
})
export class CategoriesModule {}