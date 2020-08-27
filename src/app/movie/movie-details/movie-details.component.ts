import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/movie/movies.service';
import { MoviesDetailsService } from 'src/app/movie/movies-details.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  cast = []
  cover: string
  backdrop: string
  direction: string
  duration: string
  genres = []
  movie: any
  rate: string
  rateColor: string
  rates = []
  synopsis: string
  title: string
  year: string

  subMovie: Subscription
  subRate: Subscription
  subCast: Subscription

  constructor(private route: ActivatedRoute, private mService: MoviesService,
              private mDetailService: MoviesDetailsService) {}

  ngOnInit(): void {
    this.subMovie = this.mService.getMovie(this.route.snapshot.params['id']).subscribe(response => {
      this.movie = response

      //change the title again, because...  aesthetics >:(
      if(this.movie.id === 458156) {
        let titleM: string = this.movie.title
        let splitedTitle = titleM.split(/:|-/)
        this.title = splitedTitle[0] + splitedTitle[2]
      } else {
        this.title = this.movie.title
      }

      this.cover = this.mService.getImagePath() + this.movie.poster_path
      this.backdrop = this.mService.getImagePath() + this.movie.backdrop_path
      this.duration = this.mDetailService.formatRuntime(this.movie.runtime)
      this.genres = this.movie.genres
      this.synopsis = this.movie.overview
      this.year = this.mDetailService.getYear(this.movie.release_date)
    })

    //set the rate of the movie
    this.subRate = this.mService.getRate(this.route.snapshot.params['id']).subscribe(data => {
      this.rates = data.results.slice()
      this.rate = this.mDetailService.findRate(this.rates)
      this.rateColor = this.mDetailService.colorRate(this.rate)
    })

    //set the cast and direction
    this.subCast = this.mService.getCast(this.route.snapshot.params['id']).subscribe(data => {
      this.cast = data.cast.slice(0,3)
      this.direction = this.mDetailService.getDirector(data.crew)
    })
    
  }

  ngOnDestroy() {
    this.subMovie.unsubscribe()
    this.subRate.unsubscribe()
    this.subCast.unsubscribe()
  }

}
