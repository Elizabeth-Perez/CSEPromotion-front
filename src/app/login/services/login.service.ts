
import { Injectable } from "@angular/core";
import { DataImages, ForgottenPasswordRequest, ForgottenPasswordResponse, UserAccess } from "../interfaces/login.interface";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LoginService{
    private endpoint: string = 'http://localhost:8080/email'

    constructor(private http: HttpClient){ }

    getCarousel(): Observable<DataImages[]> {
        return this.http.get<DataImages[]>(`${this.endpoint}/data-images`)
    }

    getUserAccess(): Observable<UserAccess[]> {
        return this.http.get<UserAccess[]>(`${this.endpoint}/user-access`);
    }

    postEmailForgottenPassword(emailRequest: ForgottenPasswordRequest): Observable<ForgottenPasswordResponse> {
        return this.http.post<ForgottenPasswordResponse>(`${this.endpoint}/forgotten-password`, emailRequest);
    }
}