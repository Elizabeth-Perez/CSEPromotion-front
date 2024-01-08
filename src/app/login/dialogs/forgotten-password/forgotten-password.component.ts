import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ForgottenPasswordRequest, ForgottenPasswordResponse, User } from '../../interfaces/login.interface';
import { EmailService } from 'src/app/shared/services/email.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.scss']
})
export class ForgottenPasswordComponent implements OnInit {
  numControl: FormControl;
  codeControl: FormControl;
  passwordForm: FormGroup = new FormGroup({});

  emailSend: boolean = false;
  verificated: boolean = false;

  dataEmail: ForgottenPasswordRequest = {
    to: '',
    subject: 'Recuperación de Contraseña',
    body: ''
  };

  constructor(
    private loginService: LoginService,
    private emailService: EmailService,
    private modal: NgbActiveModal,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
  ) {
    this.numControl = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]);
    this.codeControl = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]);
  }

  ngOnInit(): void {
    this.passwordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword2: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onClose() {
    this.modal.close(true);
  }

  generateRandomCode(length: number): string {
    const characters = '0123456789';
    let randomCode = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomCode += characters.charAt(randomIndex);
    }
    return randomCode;
}

  async emailBody() {
    try {
      const htmlContent = await this.emailService.loadEmailBody();
      const randomCode = this.generateRandomCode(6);
      this.emailService.setRandomCode(randomCode);
      this.dataEmail.body = htmlContent.replace('{{randomCode}}', randomCode);
    } catch (error) {
      console.error('Error al obtener la plantilla del correo:', error);
    }
  }

  async toAccept() {
    if (this.numControl.invalid) {
      this.numControl.markAllAsTouched();
      this.toastr.warning('Información incompleta o incorrecta', 'Advertencia');
    } else {
      this.loginService.getUsers().subscribe(async res => {
        const matchedUser = res.find(users => users.userEnrollment === this.numControl.value);
        if (matchedUser) {
          this.dataEmail.to = matchedUser.user;
          await this.emailBody();
          this.emailService.postEmailForgottenPassword(this.dataEmail).subscribe((res: ForgottenPasswordResponse) => {
            if (res.send) {
              this.toastr.success('Correo electrónico enviado correctamente', 'Éxito');
              this.emailSend = true;
            } else {
              this.toastr.warning('No se ha podido enviar el correo electrónico de recuperación. Intente nuevamente', 'Advertencia');
            }
          }, () => {
            this.toastr.error('Problemas de conexión. Intente nuevamente', 'Error');
            this.modal.close(true);
          }
          );
        } else {
          this.toastr.warning('Usuario no registrado', 'Advertencia');
        }
      })
    }
  }

  verifiedCode() {
    if (this.codeControl.invalid) {
      this.codeControl.markAllAsTouched();
      this.toastr.warning('Información incompleta o incorrecta', 'Advertencia');
    } else {
      const code = this.emailService.getRandomCode();
      if (this.codeControl.value === code) {
        this.verificated = true;
      } else {
        this.toastr.warning('Codigo de verificación incorrecto. Intente nuevamente', 'Advertencia');
      }
    }
  }

  updatePassword() {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      this.toastr.warning('Información incompleta o incorrecta', 'Advertencia');
    } else {
      this.loginService.getUser(this.numControl.value).subscribe(res => {
        console.log(res);
        res.password = this.passwordForm.get('newPassword2')?.value;
        this.loginService.updatePassword(res).subscribe(ress => {
          this.toastr.success('Contraseña actualizada', 'Éxito');
          this.modal.close();
        }, () => {
          this.toastr.error('No se ha podido actualizar la contraseña. Intente nuevamente', 'Error');
        });
      }, () => {
        this.toastr.warning('No se ha podido actualizar la contraseña. Intente nuevamente', 'Error');
      });
    }
  }

  validateControl(field: string, error: string): boolean {
    const control = this.passwordForm.controls[field];
    if (!control) {
      return false;
    }
    return control.hasError(error) && (control.touched || control.dirty);
  }
}
