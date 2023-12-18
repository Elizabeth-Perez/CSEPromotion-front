import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

//Components

//Dialogs

//Sevices

//Pages
import { MainLogin } from "./pages/main-login/main-login.component";
import { LoginService } from "./services/login.service";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ForgottenPasswordComponent } from './dialogs/forgotten-password/forgotten-password.component';

@NgModule({
    declarations: [
        MainLogin,
        ForgottenPasswordComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [],
    providers: [LoginService]
})
export class LoginModule {

}