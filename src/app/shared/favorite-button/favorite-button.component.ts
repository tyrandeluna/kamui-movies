import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

import { FavoriteMovieService } from './favorite-movie.service';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss'],
  animations: [
    trigger('favorite', [
      transition('normal => favorited', [
        style({
          transform: 'scale(1)'
        }),
        animate(100 , style({
          transform: 'scale(1.5)'
        })),
        animate(150)
      ]),

      transition('favorited => normal', [
        style({
          transform: 'scale(1)'
        }),
        animate(100 , style({
          transform: 'scale(0.5)'
        })),
        animate(150)
      ]),
    ])
  ]
})
export class FavoriteButtonComponent implements OnInit, OnChanges {
  animationState
  heartClass: string[]
  @Input() isFavorite: boolean
  @Input() movie

  constructor(private favoriteService: FavoriteMovieService) { 
    this.animationState = 'normal'
    this.isFavorite = false
    this.heartClass = ['fa fa-heart-o'];
    this.movie = []
  }

  ngOnChanges() {
    if(this.movie) {
      this.isFavorite = this.favoriteService.isFavorite(this.movie.id)
      this.heartClass = this.isFavorite ? ['fa fa-heart'] : ['fa fa-heart-o']
    }
  }

  ngOnInit(): void {
    
  }

  //change heart color and fill when favorite
  toFavorite() {
    this.animationState === 'normal' ? this.animationState = 'favorited' : this.animationState = 'normal'

    if(this.isFavorite === false) {
      this.isFavorite = true
      this.favoriteService.addToFavorites(this.movie)
      this.heartClass = this.isFavorite ? ['fa fa-heart'] : ['fa fa-heart-o']
    } else {
      this.favoriteService.removeFavorite(this.movie.id)
      this.isFavorite = false
      this.heartClass = this.isFavorite ? ['fa fa-heart'] : ['fa fa-heart-o']
    }
  }

}
