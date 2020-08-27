import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieModule } from './movie/movie.module';
import { LoginModule } from './login/login.module';
import { FavoritesModule } from './favorites/favorites.module';
import { CategoriesModule } from './all-categories/categories.module';

import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileMenuComponent,
    HeaderMobileComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MovieModule,
    LoginModule,
    FavoritesModule,
    CategoriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
