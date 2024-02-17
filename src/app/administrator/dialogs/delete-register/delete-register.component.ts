import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdministratorService } from '../../services/administrator.service';

@Component({
  selector: 'administrator-delete-register',
  templateUrl: './delete-register.component.html',
  styleUrls: ['./delete-register.component.scss']
})
export class DeleteRegisterComponent implements OnInit {
  object: any;
  id: string = '';

  constructor(
    private modal: NgbActiveModal,
    private toastr: ToastrService,
    private administratorService: AdministratorService,
  ) { }

  ngOnInit(): void {
    const keys = Object.keys(this.object);
    this.id = this.object[ keys[0]];
  }

  onClose() {
    this.modal.close(true);
  }

  toAccept() {
    const keys = Object.keys(this.object);
    const firstField = keys[0];
    if (firstField === 'studyProgram') {
      this.administratorService.deleteCareer(this.id).subscribe(() => {
        this.toastr.success(`Carrera ${this.id} eliminada correctamente`, 'Éxito');
      }, () => {
        this.toastr.error(`Error al eliminar la carrera ${this.id}`, 'Error');
      });
    } else if (firstField === 'idProject') {
      this.administratorService.deleteProject(this.id).subscribe(() => {
        this.toastr.success(`Proyecto ${this.id} eliminado correctamente`, 'Éxito');
      }, () => {
        this.toastr.error(`Error al eliminar el proyecto ${this.id}`, 'Error');
      });
    } else if (firstField === 'idProgram') {
      this.administratorService.deleteProgram(this.id).subscribe(() => {
        this.toastr.success(`Programa ${this.id} eliminado correctamente`, 'Éxito');
      }, () => {
        this.toastr.error(`Error al eliminar el programa ${this.id}`, 'Error');
      });
    } else if (firstField === 'keySpeciality') {
      this.administratorService.deleteSpeciality(this.id).subscribe(() => {
        this.toastr.success(`Especialidad ${this.id} eliminada correctamente`, 'Éxito');
      }, () => {
        this.toastr.error(`Error al eliminar la especialidad ${this.id}`, 'Error');
      });
    } else if (firstField === 'idOpportunity') {
      this.administratorService.deleteOpportunity(this.id).subscribe(() => {
        this.toastr.success(`Oportunidad ${this.id} eliminada correctamente`, 'Éxito');
      }, () => {
        this.toastr.error(`Error al eliminar la oportunidad ${this.id}`, 'Error');
      });
    }
    this.modal.close(true);
  }
}
