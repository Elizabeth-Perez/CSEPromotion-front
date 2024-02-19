import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Carousel, Carrer } from "../interfaces/about-cse.interface";
import { Observable } from "rxjs";

@Injectable()
export class AboutCSEService {
    private endpoint: string = 'http://localhost:8080/about-cse';

    constructor(
        private http: HttpClient,
    ){}

    getCarousels(): Observable<Carousel[]> {
        return this.http.get<Carousel[]>(`${this.endpoint}/carousels/all`)
    }

    getCareers(): Observable<Carrer[]> {
        return this.http.get<Carrer[]>(`${this.endpoint}/careers/all`)
    }
}