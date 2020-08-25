import { Component, OnInit } from '@angular/core';
import { MoviesService } from './shared/movies.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    results: any = []

    constructor(private http: HttpClient, private smService: MoviesService) {}

    ngOnInit() {}


}
