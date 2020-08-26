import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.scss']
})
export class MovieTileComponent implements OnInit {
  @Input() movie: any
  @Input() movieID: number
  @Input() coverPath: string
  cover: string

  constructor(private mService: MoviesService) {
  }

  ngOnInit(): void {
    this.cover = this.mService.imagePath + this.coverPath
  }
  

}
