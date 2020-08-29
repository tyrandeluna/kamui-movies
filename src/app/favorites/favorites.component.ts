import { Component, OnInit } from '@angular/core';
import { FavoriteMovieService } from '../shared/favorite-button/favorite-movie.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites = []
  constructor(private favoriteService: FavoriteMovieService) {
   }

  ngOnInit(): void {
    for(let i = 0; i < this.favoriteService.numberOfFavorites(); i++) {
      this.favorites.push(this.favoriteService.returnFavorite(i))
    }
  }

}
