import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'categories', component: AllCategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
