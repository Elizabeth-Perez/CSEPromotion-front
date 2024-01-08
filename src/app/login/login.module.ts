import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Components

//Dialogs
import { ForgottenPasswordComponent } from './dialogs/forgotten-password/forgotten-password.component';

//Sevices
import { EmailService } from "../shared/services/email.service";
import { LoginService } from "./services/login.service";

//Pages
import { MainLogin } from "./pages/main-login/main-login.component";

@NgModule({
    declarations: [
        MainLogin,
        ForgottenPasswordComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [],
    providers: [
        LoginService,
        EmailService
    ]
})
export class LoginModule {

}