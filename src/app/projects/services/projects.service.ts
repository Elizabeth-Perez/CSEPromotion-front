import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Carousel, Project } from "../interfaces/projects.interface";
import { Observable } from "rxjs";

@Injectable()
export class ProjectService {
    private endpoint: string = 'http://localhost:8080/projects';

    constructor(
        private http: HttpClient,
    ){}

    getCarousels(): Observable<Carousel[]> {
        return this.http.get<Carousel[]>(`${this.endpoint}/carousels/all`)
    }

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(`${this.endpoint}/all`)
    }
}