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
  subRelease: Subscription

  constructor(private mService: MoviesService) { }

  ngOnInit(): void {
    this.subRelease = this.mService.getReleases().subscribe(response => {
      this.releasedMovies = response.results
    });
  }

  ngOnDestroy() {
    this.subRelease.unsubscribe()
  }

}
