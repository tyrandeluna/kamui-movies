import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/movie/movies.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  categoryList = []
  categoryLoad = []
  allMoviesList = []
  loadedLines: number = 0
  sizeLoading: number = 3
  subCategory: Subscription

  constructor(private mService: MoviesService) { }

  ngOnInit(): void {
    this.loadMovies()
  }

  getAllMovies(id: number){
    this.mService.getMoviesByGenre(id).subscribe(response => {
      this.allMoviesList.push(response.results.slice(0, 21))
    })
  }
  
  //show the first 3 categories
  loadMovies() {
    if(this.categoryList = []) {
      this.subCategory = this.mService.getGenresMovies().subscribe(response => {
        this.categoryList = response.genres.slice()
        this.categoryLoad = this.categoryList.slice(0, 3)

        for(let i = this.loadedLines; i < this.sizeLoading; i++) {
          this.getAllMovies(this.categoryList[i].id);
          this.loadedLines++
        }
      })
    }
  }

  ngOnDestroy() {
    this.subCategory.unsubscribe()
  }

  //knows when the user scroll to bottom
  @HostListener("window:scroll", ['$event'])
  onWindowScroll(){
    if(this.loadedLines < this.categoryList.length) {
      let startSlice = this.loadedLines
      let endSlice = this.loadedLines + this.sizeLoading

      if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
        if(this.categoryList) {
          this.categoryLoad = this.categoryList.slice(0, endSlice)
          for(let i = startSlice; i < endSlice - 1; i++) {
            this.getAllMovies(this.categoryList[i].id);
            this.loadedLines++
          }
        }
      }
    }
  }
}
