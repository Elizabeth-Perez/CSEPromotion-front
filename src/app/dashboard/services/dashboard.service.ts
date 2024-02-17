import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Carousel, Carrer, Opportunity, Program, Project, Speciality } from "../interfaces/dashboard.interface";

@Injectable()
export class DashboardService {
    private endpoint: string = 'http://localhost:8080/dashboard';

    constructor(
        private http: HttpClient,
    ){}

    getCarousels(): Observable<Carousel[]> {
        return this.http.get<Carousel[]>(`${this.endpoint}/all`)
    }

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(`${this.endpoint}/projects/all`)
    }

    getPrograms(): Observable<Program[]> {
        return this.http.get<Program[]>(`${this.endpoint}/programs/all`)
    }

    getSpecialities(): Observable<Speciality[]> {
        return this.http.get<Speciality[]>(`${this.endpoint}/specialities/all`)
    }

    getOpportunities(): Observable<Opportunity[]> {
        return this.http.get<Opportunity[]>(`${this.endpoint}/opportunities/all`)
    }

    getCareer(): Observable<Carrer[]> {
        return this.http.get<Carrer[]>(`${this.endpoint}/careers/all`)
    }
}