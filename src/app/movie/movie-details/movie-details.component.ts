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
  duration: string
  genres = []
  movie: any
  rate: string
  rates = []
  synopsis: string
  title: string
  year: string

  constructor(private route: ActivatedRoute, private mService: MoviesService,
              private mDetailService: MoviesDetailsService) { }

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

      this.duration = this.mDetailService.formatRuntime(this.movie.runtime)
      this.genres = this.movie.genres
      this.year = this.mDetailService.getYear(this.movie.release_date)
      this.synopsis = this.movie.overview
    })

    //set the rate of the movie
    this.mService.getRate(this.route.snapshot.params['id']).subscribe(data => {
      this.rates = data.results
      this.rate = this.mDetailService.findRate(this.rates)
    })

    //set the cast
    this.mService.getCast(this.route.snapshot.params['id']).subscribe(data => {
      this.cast = data.cast.slice(0,3)
    })
    
  }

}
