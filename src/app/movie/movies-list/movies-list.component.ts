import { Component, OnInit, OnDestroy, HostListener, Input, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/movie/movies.service';
import { FilterMoviesService } from 'src/app/shared/filter-button/filter-movies.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  categoryList = []
  categoryLoad = []
  changeClass: boolean
  allMoviesList = []
  listClass: string[]
  loadedLines: number = 0
  selectedGenre: string
  sizeLoading: number = 3
  subscription: Subscription
  subCategory: Subscription 

  constructor(private mService: MoviesService, private filterService: FilterMoviesService) {
    this.listClass = ['movie-tiles']
    this.changeClass = false

    this.subscription = this.filterService.dataString$.subscribe(
      data => {
        if(this.selectedGenre !== data){
          this.selectedGenre = data;
          
          this.changeClass = true
          this.activeGenreFilter()
        }
      });
   }

  ngOnInit(): void {
    this.loadMovies()
  }

  getAllMovies(id: number){
    this.mService.getMoviesByGenre(id).subscribe(response => {
      this.allMoviesList.push(response.results.slice(0, 21))
    })
  }

  //changes the array of categories to use based on filter
  activeGenreFilter() {
    if(this.selectedGenre !== '') {
      for(let i = 0; i < this.categoryList.length; i++) {
        if(this.categoryList[i].name === this.selectedGenre) {
            this.categoryLoad = [this.categoryList[i]]
            this.allMoviesList = []
            this.getAllMovies(this.categoryLoad[0].id)
        }
      }
    } else {
      //reset all over again
      this.categoryLoad = []
      this.categoryList = []
      this.changeClass = false
      this.allMoviesList = []
      this.listClass = this.changeClass ? ['movie-tiles-selected'] : ['movie-tiles']
      this.loadedLines = 0
      this.sizeLoading = 3
      this.loadMovies()
    }

    this.listClass = this.changeClass ? ['movie-tiles-selected'] : ['movie-tiles']
  }
  
  //show the first 3 lines
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
    this.subscription.unsubscribe()
  }

  //knows when the user scroll to bottom and load more buttons
  @HostListener("window:scroll", ['$event'])
  onWindowScroll(){
    if(this.loadedLines < this.categoryList.length) {
      let startSlice = this.loadedLines
      let endSlice = this.loadedLines + this.sizeLoading

      if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
        if(this.categoryList) {
          this.categoryLoad = this.categoryList.slice(0, endSlice)
          for(let i = startSlice; i < endSlice - 1; i++) {
            this.getAllMovies(this.categoryList[i].id)
            this.loadedLines++
          }
        }
      }
    }
  }
}
