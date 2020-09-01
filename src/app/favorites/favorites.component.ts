import { Component, OnInit, OnDestroy } from '@angular/core';
import { FavoriteMovieService } from '../shared/favorite-button/favorite-movie.service';
import { Subscription } from 'rxjs';
import { FilterMoviesService } from '../shared/filter-button/filter-movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  favorites
  favoritesBackup = []
  favoritesFiltered
  selectedGenre: number
  subscription: Subscription

  constructor(private favoriteService: FavoriteMovieService, private filterService: FilterMoviesService) {
    this.favorites = []
    this.favoritesFiltered = []
    this.selectedGenre = 0

    this.subscription = this.filterService.dataString$.subscribe(
      data => {
        if(this.selectedGenre !== data){
          this.selectedGenre = data;

          this.showMoviesSelected()
        }
      });
   }

  ngOnInit(): void {
    this.populateFavorites()
    this.favorites = this.favoritesBackup
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  showMoviesSelected() {
    if(this.selectedGenre !== 0) {

      if(this.favorites !== this.favoritesBackup) {
        //reset array while changing genres
        this.favorites = this.favoritesBackup
      }

      //for each movie, saves your genres to compare if they are the same or not
      for(let i = 0; i < this.favorites.length; i++) {
        let genres  = []
        genres = this.favorites[i].genre_ids
        for(let j = 0; j < genres.length; j++) {
          if(genres[j] === this.selectedGenre) {
            //if the genres are the same, saves on a array
            this.favoritesFiltered.push(this.favorites[i])
          }
        }
      }

      //change the array with movies to show
      this.favorites = []
      this.favorites = this.favoritesFiltered
      this.favoritesFiltered = []
    } else {
      //resets to show all favorited movies
      this.favoritesFiltered = []
      this.favorites = []
      this.favorites = this.favoritesBackup
    }
  }

  //changed from favorites to favoritesBackup because I want to maintain the original array
  populateFavorites() {
    for(let i = 0; i < this.favoriteService.numberOfFavorites(); i++) {
      this.favoritesBackup.push(this.favoriteService.returnFavorite(i))
    }
  }
}
