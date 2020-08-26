import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MoviesDetailsService {

    //find the US rating of the movie
    findRate(rates = []): string {
        for (let i = 0; i < rates.length; i++) {
            if(rates[i].iso_3166_1 === "US"){
                let release = rates[i].release_dates
        
                if(release[0].certification != "") {
                    return release[0].certification
                } else if(release[0].certification == "") {

                    for (let cert of release) {
                        if(cert.certification != "") {
                            return cert.certification
                        } else {
                            return "NR"
                        }
                    }

                }
            }  else if (i === rates.length && rates[i].iso_3166_1 !== "US") {
                return "NR"
            }
        }
    }

    colorRate(rate: string): string {
        if(rate === "G") {
            return "#5C9C3E"
        } else if(rate === "PG") {
            return "#00A6F0"
        } else if(rate === "PG-13") {
            return "#B947DC"
        } else if(rate === "R") {
            return "#FD9017"
        } else if(rate === "NC-17") {
            return "#EE4312"
        } else {
            return "#8D8B8C"
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