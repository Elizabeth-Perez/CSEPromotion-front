import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Certification, Frameworks, Functions, Ides, ProgrammingLanguages, Skill, Speciality } from "../interfaces/specialities.interface";

@Injectable()
export class SpecialitiesService {
    private endpoint: string = 'http://localhost:8080/specialities';

    constructor (
        private http: HttpClient,
    ) {}

    getSpecialities(): Observable<Speciality[]> {
        return this.http.get<Speciality[]>(`${this.endpoint}/all`)
    }

    getFunctions(): Observable<Functions[]> {
        return this.http.get<Functions[]>(`${this.endpoint}/functions/all`)
    }

    getSkills(): Observable<Skill[]> {
        return this.http.get<Skill[]>(`${this.endpoint}/skills/all`)
    }

    getProgramming(): Observable<ProgrammingLanguages[]> {
        return this.http.get<ProgrammingLanguages[]>(`${this.endpoint}/programming/all`)
    }

    getIdes(): Observable<Ides[]> {
        return this.http.get<Ides[]>(`${this.endpoint}/ides/all`)
    }

    getFramewoks(): Observable<Frameworks[]> {
        return this.http.get<Frameworks[]>(`${this.endpoint}/frameworks/all`)
    }

    getCertifications(): Observable<Certification[]> {
        return this.http.get<Certification[]>(`${this.endpoint}/certifications/all`)
    }
}