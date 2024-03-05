import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Speciality } from "../interfaces/specialities.interface";

@Injectable()
export class SpecialitiesService {
    private endpoint: string = 'http://localhost:8080/specialities';

    constructor (
        private http: HttpClient,
    ) {}

    getSpecialities(): Observable<Speciality[]> {
        return this.http.get<Speciality[]>(`${this.endpoint}/all`)
    }
}