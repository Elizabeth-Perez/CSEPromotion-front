import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../../services/login.service";
import { ToastrService } from "ngx-toastr";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { ForgottenPasswordComponent } from "../../dialogs/forgotten-password/forgotten-password.component";

@Component({
    selector: 'login-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {

    username: string = '';
    password: string = '';
    loginForm: FormGroup;

    constructor(
        private loginService: LoginService,
        private fb: FormBuilder,
        private toastr: ToastrService,
        private modalService: NgbModal,
        private router: Router
    ){
        this.loginForm = this.fb.group({
            userControl: ['', [Validators.required, Validators.email]],
            passwordControl: ['', Validators.required]
        });
    }

    validateControl(field: string, error: string): boolean {
        const control = this.loginForm.controls[field];
        if (!control) {
            return false;
        }
        return control.hasError(error) && (control.touched || control.dirty);
    }

    userAccess() {
        if (this.loginForm.valid) {
            const { userControl, passwordControl } = this.loginForm.value;
            this.loginService.getUsers().subscribe(res => {
                const matchedUser = res.find(users => users.user === userControl && users.password === passwordControl);
                if (matchedUser) {
                    this.toastr.success('Acceso permitido', 'Éxito');
                    this.router.navigate(['/administrator'])
                } else {
                    this.toastr.error('Usuario y/o contraseña incorrectos', 'Error');
                }
            });
        } else {
            this.loginForm.markAllAsTouched();
            this.toastr.warning('Campos vácios', 'Advertencia');
        }
    }

    forgottenPassword() {
        this.modalService.open(ForgottenPasswordComponent, {
            centered: true,
            backdrop: 'static',
            windowClass: 'forgotten-password',
            size: 'md',
        });
    }
}