import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../services/login.service";
import { DataImages } from "../../interfaces/login.interface";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ForgottenPasswordComponent } from "../../dialogs/forgotten-password/forgotten-password.component";

@Component({
    selector: 'login-main',
    templateUrl: './main-login.component.html',
    styleUrls: ['./main-login.component.scss']
})
export class MainLogin implements OnInit {

    dataImages: DataImages[] = [];
    currentIndex: number = 0;
    username: string = '';
    password: string = '';
    loginForm: FormGroup;

    constructor(
        private loginService: LoginService,
        private fb: FormBuilder,
        private toastr: ToastrService,
        private modalService: NgbModal
    ) {
        this.loginForm = this.fb.group({
            userControl: ['', [Validators.required, Validators.email]],
            passwordControl: ['', Validators.required]
        });
    }
    ngOnInit() {
        this.loginService.getCarousel().subscribe(res => {
            console.log(res);
            this.dataImages = res;

            this.currentIndex = Math.floor(Math.random() * this.dataImages.length);

            setInterval(() => {
                this.changeImage();
            }, 10000);
        });
    }

    validateControl(field: string, error: string): boolean {
        const control = this.loginForm.controls[field];
        if (!control) {
            return false;
        }
        return control.hasError(error) && (control.touched || control.dirty);
    }

    changeImage() {
        const carouselElement = document.querySelector('.carousel') as HTMLElement;
        if (carouselElement) {
            carouselElement.style.opacity = '0.8';
            setTimeout(() => {
                this.currentIndex = (this.currentIndex + 1) % this.dataImages.length;
                carouselElement.style.opacity = '1';
            }, 1000);
        }
    }

    userAccess() {
        if (this.loginForm.valid) {
            const { userControl, passwordControl } = this.loginForm.value;
            this.loginService.getUserAccess().subscribe(res => {
                const matchedUser = res.find(users => users.user === userControl && users.password === passwordControl);
                if (matchedUser) {
                    this.toastr.success('Acceso permitido', 'Éxito');
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
        const modalParam = this.modalService.open(ForgottenPasswordComponent, {
            centered: true,
            backdrop: 'static',
            windowClass: 'forgotten-password',
            size: 'lg',
        });
        const userEmailValue = this.loginForm.get('userControl')?.value;
        modalParam.componentInstance.userEmailControl.setValue(userEmailValue);
    }
}