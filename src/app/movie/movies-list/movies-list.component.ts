import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  categoryList = []
  allMoviesList = []
  subCategory: Subscription

  constructor(private mService: MoviesService) { }

  ngOnInit(): void {
    this.subCategory = this.mService.getGenresMovies().subscribe(response => {
      this.categoryList = response.genres
      this.getAllMovies()
    })
  }

  getAllMovies(){
    for (let category of this.categoryList) {
      this.mService.getMoviesByGenre(category.id).subscribe(response => {
        this.allMoviesList.push(response.results.slice(0, 21))
      })
    }
  }
  
  ngOnDestroy() {
    this.subCategory.unsubscribe()
  }
}
