import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';
import { FilterButtonComponent } from './filter-button/filter-button.component';

@NgModule({
    declarations: [
        FavoriteButtonComponent,
        FilterButtonComponent,
    ], 
    imports: [
        CommonModule,
    ],
    exports: [
        FavoriteButtonComponent,
        FilterButtonComponent,
        CommonModule,
    ]
})
export class SharedModule {}