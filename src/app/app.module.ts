import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { FeaturedMovieComponent } from './featured-movie/featured-movie.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { MovieTileComponent } from './movie/movie-tile/movie-tile.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { MoviesListComponent } from './movie/movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileMenuComponent,
    FeaturedMovieComponent,
    HeaderMobileComponent,
    LoginComponent,
    MovieComponent,
    MovieDetailsComponent,
    MovieTileComponent,
    FavoritesComponent,
    HomePageComponent,
    AllCategoriesComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
