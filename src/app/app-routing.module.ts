import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturedMovieComponent } from './featured-movie/featured-movie.component';
import { MovieComponent } from './movie/movie.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'movie-details', component: MovieDetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'login', component: LoginComponent},
  { path: 'all-categories', component: AllCategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
