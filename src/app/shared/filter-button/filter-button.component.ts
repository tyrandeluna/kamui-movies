import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { MoviesService } from 'src/app/movie/movies.service';

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

  constructor(router: Router, private mService: MoviesService) {
    this.animationState = 'hidden'
    this.genreState = 'hidden'
    this.route = router
  }

  ngOnInit(): void {
    this.mService.getGenresMovies().subscribe(response => {
      this.allGenres = response.genres
      console.log(this.allGenres)
    })
  }

  //shows/hide the div with filters
  onToggle() {
    this.animationState === 'hidden' ? this.animationState = 'shown' : this.animationState = 'hidden'
  }

  onToggleGenre() {
    this.genreState === 'hidden' ? this.genreState = 'shown' : this.genreState = 'hidden'
  }
}
