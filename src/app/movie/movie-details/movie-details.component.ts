import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/shared/movies.service';
import { MoviesDetailsService } from 'src/app/shared/movies-details.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  cast = []
  cover: string
  backdrop: string
  direction: string
  duration: string
  genres = []
  imagePath: string
  movie: any
  rate: string
  rates = []
  synopsis: string
  title: string
  year: string

  constructor(private route: ActivatedRoute, private mService: MoviesService,
              private mDetailService: MoviesDetailsService) { 
                this.imagePath = 'http://image.tmdb.org/t/p/original'
              }

  ngOnInit(): void {
    this.mService.getMovie(this.route.snapshot.params['id']).subscribe(response => {
      this.movie = response
      console.log(this.movie)

      //change the title again, because...  aesthetics >:(
      if(this.movie.id === 458156) {
        let titleM: string = this.movie.title
        let splitedTitle = titleM.split(/:|-/)
        this.title = splitedTitle[0] + splitedTitle[2]
      }

      this.cover = this.imagePath + this.movie.poster_path
      this.backdrop = this.imagePath + this.movie.backdrop_path
      this.duration = this.mDetailService.formatRuntime(this.movie.runtime)
      this.genres = this.movie.genres
      this.synopsis = this.movie.overview
      this.year = this.mDetailService.getYear(this.movie.release_date)
    })

    //set the rate of the movie
    this.mService.getRate(this.route.snapshot.params['id']).subscribe(data => {
      this.rates = data.results
      this.rate = this.mDetailService.findRate(this.rates)
    })

    //set the cast and direction
    this.mService.getCast(this.route.snapshot.params['id']).subscribe(data => {
      this.cast = data.cast.slice(0,3)
      this.direction = this.mDetailService.getDirector(data.crew)
    })
    
  }

}
