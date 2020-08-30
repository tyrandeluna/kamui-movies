import { Component, OnInit } from '@angular/core';
import { FavoriteMovieService } from '../shared/favorite-button/favorite-movie.service';
import { Subscription } from 'rxjs';
import { FilterMoviesService } from '../shared/filter-button/filter-movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites = []
  // favoritesFiltered
  // selectedGenre: number
  subscription: Subscription

  constructor(private favoriteService: FavoriteMovieService, private filterService: FilterMoviesService) {
    // this.selectedGenre = 0

    // this.subscription = this.filterService.dataString$.subscribe(
    //   data => {
    //     if(this.selectedGenre !== data){
    //       this.selectedGenre = data;

    //       this.showMoviesSelected()
    //     }
    //   });
   }

  ngOnInit(): void {
    for(let i = 0; i < this.favoriteService.numberOfFavorites(); i++) {
      this.favorites.push(this.favoriteService.returnFavorite(i))
    }
  }

  // showMoviesSelected() {
  //   if(this.selectedGenre !== 0) {
  //     for(let i = 0; i < this.favorites.length; i++) {
  //       for(let j = 0; j < this.favorites.genre.length; j++) {
  //         if(this.favorites.genre[j] === this.selectedGenre) {
  //           this.favoritesFiltered.push(this.favorites.genre[j])
  //         }
  //       }
  //     }
  
  //     this.favorites = []
  //     this.favorites = this.favoritesFiltered
  //   } else {
  //     this.favoritesFiltered = []
  //   }
  // }
}
