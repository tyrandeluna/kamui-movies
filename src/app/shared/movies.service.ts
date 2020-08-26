import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MoviesService {
    url: string
    appKey: string
    imagePath: string
    

    constructor(private http: HttpClient) {
        this.appKey = '67e33bb0e14d5e58469dc1d239a91793'
        this.url = 'https://api.themoviedb.org/3/movie/'
        this.imagePath = 'http://image.tmdb.org/t/p/original'
    }
    
    getImagePath(): string {
        return this.imagePath
    }
    
    getMovie(id: number): Observable<any> {
        return this.http.get(`${this.url}${id}?api_key=${this.appKey}`)
    }

    // featuredMovie(id: number): Observable<any> {
    //     return this.http.get(`${this.url}${id}?api_key=${this.appKey}`)
    // }

    //Released movies
    getReleases(): Observable<any>{
        return this.http.get(`${this.url}popular?api_key=${this.appKey}&language=en-US&page=1`)
    }

    //Rising movies
    getRising(): Observable<any>{
        return this.http.get(`${this.url}top_rated?api_key=${this.appKey}&language=en-US&page=1`)
    }

    //get the certification of the movie (R, PG, PG-13 etc)
    getRate(id: number): Observable<any>{
        return this.http.get(`${this.url}${id}/release_dates?api_key=${this.appKey}`)
    }

    //get main actors and director
    getCast(id: number): Observable<any>{
        return this.http.get(`${this.url}${id}/credits?api_key=${this.appKey}`)
    }

    // just to find movies
    // findMovie(id: string): Observable<any> {
    //     return this.http.get(`https://api.themoviedb.org/3/find/${id}?api_key=${this.appKey}&language=en-US&external_source=imdb_id`)
    // }

}