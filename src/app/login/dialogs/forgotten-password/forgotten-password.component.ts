import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { ForgottenPasswordRequest } from '../../interfaces/login.interface';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.scss']
})
export class ForgottenPasswordComponent  {
  userEmailControl: FormControl;
  
  dataEmail: ForgottenPasswordRequest = {
    to: '',
    subject: 'Asunto del correo',
    body: '<p>Este es el contenido HTML del correo.</p>'
  };

  constructor(
    private loginService: LoginService,
    private modal: NgbActiveModal,
    private toastr: ToastrService,
  ) {
    this.userEmailControl = new FormControl('', [Validators.required, Validators.email]);
  }

  onClose() {
    this.modal.close(true);
  }

  async toAccept() {
    this.dataEmail.to = this.userEmailControl.value;
    this.loginService.postEmailForgottenPassword(this.dataEmail).subscribe(res => {
      console.log(res)
    });
  }
}
