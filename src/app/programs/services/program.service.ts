import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carousel, Program } from '../interfaces/program.interface';

@Injectable()
export class ProgramService {
    private endpoint: string = 'http://localhost:8080/programs';

    constructor(
        private http: HttpClient,
    ){}

    getCarousels(): Observable<Carousel[]> {
        return this.http.get<Carousel[]>(`${this.endpoint}/carousels/all`)
    }

    getPrograms(): Observable<Program[]> {
        return this.http.get<Program[]>(`${this.endpoint}/all`)
    }
    
}