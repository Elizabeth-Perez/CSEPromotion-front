import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ForgottenPasswordRequest, ForgottenPasswordResponse } from "src/app/login/interfaces/login.interface";

@Injectable()
export class EmailService {
    private endpoint: string = 'http://localhost:8080/email'

    constructor(private http: HttpClient) { }

    postEmailForgottenPassword(emailRequest: ForgottenPasswordRequest): Observable<ForgottenPasswordResponse> {
        return this.http.post<ForgottenPasswordResponse>(`${this.endpoint}/forgotten-password`, emailRequest);
    }

    private randomCode: string = '';

    setRandomCode(code: string): void {
        this.randomCode = code;
    }

    getRandomCode(): string {
        return this.randomCode;
    }

    async loadEmailBody(): Promise<string> {
        try {
            const htmlContent = await this.http.get('assets/templates/forgottenEmail.html', { responseType: 'text' }).toPromise();
            return htmlContent || '';
        } catch (error) {
            console.error('Error al cargar el contenido HTML del correo:', error);
            throw error; 
        }
    }

}