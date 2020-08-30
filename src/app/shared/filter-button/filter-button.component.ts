import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { MoviesService } from 'src/app/movie/movies.service';
import { FilterMoviesService } from './filter-movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
  animations: [
    trigger('toggle', [
      state('shown', style({
        'display': 'flex'
      })),
      transition('hidden => shown', [
        style({
          'display': 'flex',
          transform: 'scale(0)'
        }),
        animate(200), style({
          'display': 'flex',
          'margin-top': '10px',
          transform: 'scale(1)'
        })
      ]),
      transition('shown => hidden', [
        style({
          'display': 'flex',
          transform: 'scale(1)'
        }),
        animate(200, style({
          'display': 'flex',
          transform: 'scale(0)'
        }))
      ])
    ]),

    trigger('toggleGenre', [
      state('hidden', style({
        height: '0px'
      })),
      state('shown', style({
        height: '300px'
      })),
      transition('hidden => shown', [
        animate(200)
      ]),
      transition('shown => hidden', [
        animate(200)
      ])
    ])
  ]
})
export class FilterButtonComponent implements OnInit {
  animationState
  genreState
  route: Router
  allGenres = []

  constructor(router: Router, private mService: MoviesService, private filterService: FilterMoviesService) {
    this.animationState = 'hidden'
    this.genreState = 'hidden'
    this.route = router
  }

  ngOnInit(): void {
    this.mService.getGenresMovies().subscribe(response => {
      this.allGenres = response.genres
    })
    
  }

  //shows/hide the div with filters
  onToggle(event: Event){
    event.stopPropagation()
    this.animationState === 'hidden' ? this.animationState = 'shown' : this.animationState = 'hidden'
  }

  //show the genres
  onToggleGenre(event: Event) {
    event.stopPropagation()
    this.genreState === 'hidden' ? this.genreState = 'shown' : this.genreState = 'hidden'
  }

  //send the genre selected to the service
  genreToFilter(genre: string) {
    this.filterService.getGenre(genre)
  }

  //click outside to close the menu too
  @HostListener('document:click', ['$event']) clickout(event) {
    this.animationState = 'hidden'
  }
}