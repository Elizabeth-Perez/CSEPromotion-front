
import { Injectable } from "@angular/core";
import { DataImages, ForgottenPasswordRequest, ForgottenPasswordResponse, User, UserAccess } from "../interfaces/login.interface";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LoginService{
    private endpoint: string = 'http://localhost:8080/login'

    constructor(private http: HttpClient){ }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.endpoint}/all`)
    }

    getUser(userEnrollment: String): Observable<User> {
        return this.http.get<User>(`${this.endpoint}/all/${userEnrollment}`);
    }

    getCarousel(): Observable<DataImages[]> {
        return this.http.get<DataImages[]>(`${this.endpoint}/data-images`)
    }

    getUserAccess(): Observable<UserAccess[]> {
        return this.http.get<UserAccess[]>(`${this.endpoint}/user-access`);
    }

    updatePassword(user: User): Observable<User> {
        return this.http.put<User>(`${this.endpoint}/update/${user.userEnrollment}`, user);
    }
}