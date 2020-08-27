import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'favorites', loadChildren: './favorites/favorites.module#FavoritesModule'},
  { path: 'login', loadChildren: './login/login.module#LoginModule'},
  { path: 'categories', loadChildren: './all-categories/categories.module#AllCategoriesModule'},
  { path: 'movie-details/:id', loadChildren: './movie/movie.module#MovieModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
