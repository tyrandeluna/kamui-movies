import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieModule } from './movie/movie.module';
import { LoginModule } from './login/login.module';

import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileMenuComponent,
    HeaderMobileComponent,
    FavoritesComponent,
    HomePageComponent,
    AllCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MovieModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
