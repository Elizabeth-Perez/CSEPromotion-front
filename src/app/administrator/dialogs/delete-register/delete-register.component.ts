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
    } else if (firstField === 'controlNumber') {
      this.administratorService.deleteProjectMembers(this.id).subscribe(() => {
        this.toastr.success(`Alumno ${this.id} eliminado correctamente`, 'Éxito');
      }, () => {
        this.toastr.error(`Error al eliminar el alumno ${this.id}`, 'Error');
      });
    } else if (firstField === 'teacherEnrollment') {
      this.administratorService.deleteAcademy(this.id).subscribe(() => {
        this.toastr.success(`Miembro de la academia ${this.id} eliminado correctamente`, 'Éxito');
      }, () => {
        this.toastr.error(`Error al eliminar al miembro de la academia ${this.id}`, 'Error');
      });
    } else if (firstField === 'idEntity') {
      this.administratorService.deleteEntity(this.id).subscribe(() => {
        this.toastr.success(`Entidad ${this.id} eliminada correctamente`, 'Éxito');
      }, () => {
        this.toastr.error(`Error al eliminar la entidad ${this.id}`, 'Error');
      });
    } else if (firstField === 'idStay') {
      this.administratorService.deleteStay(this.id).subscribe(() => {
        this.toastr.success(`Estancia ${this.id} eliminada correctamente`, 'Éxito');
      }, () => {
        this.toastr.error(`Error al eliminar la estancia ${this.id}`, 'Error');
      });
    } else if (firstField === 'idCategory') {
      this.administratorService.deleteCategory(this.id).subscribe(() => {
        this.toastr.success(`Categoria ${this.id} eliminada correctamente`, 'Éxito');
      }, () => {
        this.toastr.error(`Error al eliminar la categoria ${this.id}`, 'Error');
      });
    } else if (firstField === 'idCarousel') {
      this.administratorService.deleteCarousel(this.id).subscribe(() => {
        this.toastr.success(`Imagen ${this.id} eliminada correctamente`, 'Éxito');
      }, () => {
        this.toastr.error(`Error al eliminar la imagen ${this.id}`, 'Error');
      });
    } else if (firstField === 'idCarouselLogin') {
      this.administratorService.deleteCarouselLogin(this.id).subscribe(() => {
        this.toastr.success(`Datos de la imagen ${this.id} eliminada correctamente`, 'Éxito');
      }, () => {
        this.toastr.error(`Error al eliminar los datos de la imagen ${this.id}`, 'Error');
      });
    }
    this.modal.close(true);
  }
}
