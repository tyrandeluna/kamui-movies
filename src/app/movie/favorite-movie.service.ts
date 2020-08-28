import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class FavoriteMovieService {
    favoritesMovies

    constructor() {
        this.favoritesMovies = []
    }
 
    addToFavorites(movie: any) {
        this.favoritesMovies.push(movie)
    }

    removeFavorite(id: number) {
        if(this.favoritesMovies.length != 0) {
            for(let i = 0; i < this.favoritesMovies.length; i++) {
                if(this.favoritesMovies[i].id === id) {
                    this.favoritesMovies.splice(i, 1)
                }
            }
        }
    }

    isFavorite(id: number): boolean {
        if (this.favoritesMovies.filter(function(mv) { return mv.id === id; }).length > 0) {
            return true
        } else {
            return false
        }
    }

    returnFavorite(index: number) {
        return this.favoritesMovies[index]
    }

    numberOfFavorites() {
        return this.favoritesMovies.length
    }
}