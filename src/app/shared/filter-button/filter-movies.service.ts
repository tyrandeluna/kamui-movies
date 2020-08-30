import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FilterMoviesService {
    private dataStringSource = new BehaviorSubject<string>('');

  // Observable string stream
  dataString$ = this.dataStringSource.asObservable();
    genre: string
    public getGenre(genre){
        this.genre = genre;
        this.dataStringSource.next(this.genre);
      }
}