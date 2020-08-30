import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FilterMoviesService {
    private dataStringSource = new BehaviorSubject<number>(0);

  // Observable string stream
  dataString$ = this.dataStringSource.asObservable();
    genre: number

    public getGenre(genre){
        this.genre = genre;
        this.dataStringSource.next(this.genre);
    }
}