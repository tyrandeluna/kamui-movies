import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from './movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  releasedMovies = []
  risingMovies = []
  subRelease: Subscription
  subRising: Subscription

  constructor(private mService: MoviesService) { }

  ngOnInit(): void {
    this.subRelease = this.mService.getReleases().subscribe(response => {
      this.releasedMovies = response.results.slice()
    });

    this.subRising = this.mService.getRising().subscribe(response => {
      this.risingMovies = response.results.slice()
    })
  }

  ngOnDestroy() {
    this.subRelease.unsubscribe()
    this.subRising.unsubscribe()
  }

}
