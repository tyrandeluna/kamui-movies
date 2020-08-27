import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  releasedMovies = []
  risingMovies = []
  categoryList = []
  allMoviesList = []
  subRelease: Subscription
  subRising: Subscription
  subCategory: Subscription

  constructor(private mService: MoviesService) { }

  ngOnInit(): void {
    this.subRelease = this.mService.getReleases().subscribe(response => {
      this.releasedMovies = response.results
    });

    this.subRising = this.mService.getRising().subscribe(response => {
      this.risingMovies = response.results
    })

    this.subCategory = this.mService.getGenresMovies().subscribe(response => {
      this.categoryList = response.genres
      this.getAllMovies()
    })
  }

  ngOnDestroy() {
    this.subRelease.unsubscribe()
    this.subRising.unsubscribe()
    this.subCategory.unsubscribe()
  }

  getAllMovies(){
    for (let category of this.categoryList) {
      this.mService.getMoviesByGenre(category.id).subscribe(response => {
        this.allMoviesList.push(response.results.slice(0, 21))
      })
    }
  }

}
