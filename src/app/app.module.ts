import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieModule } from './movie/movie.module';
import { LoginModule } from './login/login.module';
import { FavoritesModule } from './favorites/favorites.module';
import { AllCategoriesModule } from './all-categories/categories.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DesktopHeaderComponent } from './desktop-header/desktop-header.component';


@NgModule({
  declarations: [
    AppComponent,
    MobileMenuComponent,
    HeaderMobileComponent,
    HomePageComponent,
    DesktopHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MovieModule,
    LoginModule,
    FavoritesModule,
    AllCategoriesModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
