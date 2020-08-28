import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movie/movies.service';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-featured-movie',
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.scss'],
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
export class FeaturedMovieComponent implements OnInit, OnDestroy {
  animationState
  backdrop: string
  featuredMovie: any
  genres = []
  heartClass: string[]
  isFavorite: boolean
  subscription: Subscription
  title: string

  constructor(private mService: MoviesService) {
    this.animationState = 'normal'
    this.isFavorite = false
    this.heartClass = ['fa fa-heart-o'];
  }

  ngOnInit(): void {
    this.subscription = this.mService.getMovie(458156).subscribe(res => {
      this.featuredMovie = res
      this.changeTitle()
      this.genres = this.featuredMovie.genres
      this.backdrop = this.mService.getImagePath() + this.featuredMovie.backdrop_path
    });
    
  }

  //I really didn't like the title, I'll break it to be more aesthetic >:(
  changeTitle() {
    let titleM: string = this.featuredMovie.title
    let splitedTitle = titleM.split(/:|-/)
    this.title = splitedTitle[0] + splitedTitle[2]
  }

  //change heart color when favorite
  toFavorite() {
    this.animationState === 'normal' ? this.animationState = 'favorited' : this.animationState = 'normal'
    this.isFavorite = !this.isFavorite
    this.heartClass = this.isFavorite ? ['fa fa-heart'] : ['fa fa-heart-o'];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
