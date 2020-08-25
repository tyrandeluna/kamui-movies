import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MoviesService {
    url: string
    appKey: string
    

    constructor(private http: HttpClient) {
        this.appKey = '67e33bb0e14d5e58469dc1d239a91793'
        this.url = 'https://api.themoviedb.org/3/movie/'
    }
    
    getPopular(): Observable<any>{
        return this.http.get(`${this.url}popular?api_key=${this.appKey}&language=en-US&page=1`)
    }

    featuredMovie(id: number): Observable<any> {
        return this.http.get(`${this.url}${id}?api_key=${this.appKey}`)
    }

    // just to find movies
    // findMovie(id: string): Observable<any> {
    //     return this.http.get(`https://api.themoviedb.org/3/find/${id}?api_key=${this.appKey}&language=en-US&external_source=imdb_id`)
    // }

}