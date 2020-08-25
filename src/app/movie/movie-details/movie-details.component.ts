import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: any
  title: string
  genres = []
  year: string
  duration: string
  synopsis: string
  rate: string

  constructor(private route: ActivatedRoute, private mService: MoviesService) { }

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

      this.genres = this.movie.genres
      this.getYear()
      this.formatRuntime()
    })

    //set the rate of the movie
    this.mService.getRate(this.route.snapshot.params['id']).subscribe(data => {
      if(data.results.iso_3166_1 === 'US') {
        this.rate = data.results.release_dates[0].certification
      } 
    })

    //set the cast
    this.mService.getCast(this.route.snapshot.params['id']).subscribe(data => {
      console.log(data)
    })
    
  }

  getYear() {
    let date: string = this.movie.release_date
    let splitedDate = date.split('-')
    this.year = splitedDate[0]

  }

  //convert minutes to hours
  formatRuntime() {
    let movireRunTime = this.movie.runtime
    if(movireRunTime > 59) {
      if(movireRunTime > 60) {
        let hoursToMin = Math.floor(movireRunTime / 60)
        let minCalc = movireRunTime % 60 
        this.duration = hoursToMin + 'h' + minCalc + 'min'
      } else {
        this.duration = '1h'
      }
    } else {
      this.duration = movireRunTime + 'min'
    }
  }

}
