import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'movie-details/:id', loadChildren: './movie/movie.module#MovieModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
