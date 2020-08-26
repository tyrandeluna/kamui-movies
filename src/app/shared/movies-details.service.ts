import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MoviesDetailsService {

    //find the US reting of the movie
    findRate(rates = []): string {
        for (let rate of rates) {
            if(rate.iso_3166_1 === "US"){
                let release = rate.release_dates
                return release[0].certification
            }
        }
    }

    //convert minutes to hours
    formatRuntime(runtime: number): string {
        let duration
        if(runtime > 59) {
            if(runtime > 60) {
                let hoursToMin = Math.floor(runtime / 60)
                let minCalc = runtime % 60 
                
                return duration = hoursToMin + 'h' + minCalc + 'min'
            } else {
                return duration = '1h'
            }
        } else {
            return duration = runtime + 'min'
        }
    }

    getDirector(crew = []): string {
        for (let person of crew) {
            if(person.job === "Director"){
                return person.name
            }
        }
    }

    getYear(date: string): string {
        let splitedDate = date.split('-')
        return splitedDate[0]
    }
}