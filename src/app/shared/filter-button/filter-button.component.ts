import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';

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
        height: '*'
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

  constructor(router: Router) {
    this.animationState = 'hidden'
    this.genreState = 'hidden'
    this.route = router
  }

  ngOnInit(): void {
  }

  //shows/hide the div with filters
  onToggle() {
    this.animationState === 'hidden' ? this.animationState = 'shown' : this.animationState = 'hidden'
  }

  onToggleGenre() {
    this.genreState === 'hidden' ? this.genreState = 'shown' : this.genreState = 'hidden'
  }
}
