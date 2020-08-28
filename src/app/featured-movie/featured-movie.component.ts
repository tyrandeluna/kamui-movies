import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movie/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-featured-movie',
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.scss']
})
export class FeaturedMovieComponent implements OnInit, OnDestroy {
  backdrop: string
  featuredMovie: any
  genres = []
  heartClass: string[]
  isFavorite: boolean
  subscription: Subscription
  title: string

  constructor(private mService: MoviesService) {
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

  //change heart color when favorite
  toFavorite() {
    this.isFavorite = !this.isFavorite
    this.heartClass = this.isFavorite ? ['fa fa-heart'] : ['fa fa-heart-o'];
  }

  //I really didn't like the title, I'll break it to be more aesthetic >:(
  changeTitle() {
    let titleM: string = this.featuredMovie.title
    let splitedTitle = titleM.split(/:|-/)
    this.title = splitedTitle[0] + splitedTitle[2]
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
