import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class WeatherService {
    constructor(private http: HttpClient) {}

    getTemp(nameOfCity: string) {
        const url = 'https://api.openweathermap.org/data/2.5/weather?appid=9918e7bc5c17feb84e25068d319edfa3&units=metric&q=' + nameOfCity;
        return this.http.get(url)
        .toPromise()
        .then((res:any) => res.main.temp)
    }
}