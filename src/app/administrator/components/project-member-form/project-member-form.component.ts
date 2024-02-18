import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Career, ProjectMember } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'administrator-project-member-form',
    templateUrl: './project-member-form.component.html',
    styleUrls: ['./project-member-form.component.scss']
})

export class ProjectMemberFormComponent implements OnInit {    
    currentRoute: string = 'project-members';
    title: string = 'Administrador de alumnos';
    subTitle: string = 'Complete todos los campos obligatorios para realizar alguna de las acciones.';
    addBan: boolean = false;
    editBan: boolean = false;
    viewBan: boolean = false;
    projectMember: ProjectMember = {
        controlNumber: '',
        firstName: '',
        lastName: ''
    };

    identificationForm: FormGroup = new FormGroup({});

    constructor(
        private administratorService: AdministratorService,
        private toastr: ToastrService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
    ) { }

    ngOnInit() {
        this.initForms();
        this.activatedRoute.url.subscribe(urlSegments => {
            const currentUrl = urlSegments.join('/');
            if (currentUrl === 'project-members/new') {
                this.addBan = true;
            } else if (currentUrl.startsWith('project-members/view/')) {
                this.viewBan = true;
            } else if (currentUrl.startsWith('project-members/')) {
                this.editBan = true;
            }
        });
        this.data();
    }

    initForms(){
        this.identificationForm = this.fb.group({
            controlNumber: ['', [Validators.required, Validators.maxLength(10)]],
            firstName: ['', [Validators.required, Validators.maxLength(50)]],
            lastName: ['', [Validators.required, Validators.maxLength(50)]],
        });
    }

    validateControl(form: FormGroup, field: string, error: string): boolean {
        const control = form.controls[field];
        if (!control) {
          return false;
        }
        return control.hasError(error) && (control.touched || control.dirty);
      }

    add() {
        if (this.identificationForm.valid) {
            const projectMember: ProjectMember = {
                controlNumber: this.identificationForm.get('controlNumber')?.value || '',
                firstName: this.identificationForm.get('firstName')?.value || '',
                lastName: this.identificationForm.get('lastName')?.value || '',
            };
            this.administratorService.createProjectMembers(projectMember).subscribe(res => {
                if(res) {
                    this.toastr.success('Alumno creado exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/project-members'])
                } else {
                    this.toastr.error('Error al crear el nuevo alumno', 'Error');
                }
            });
        } else {
            this.toastr.warning('Campos vacios o erroneos', 'Advertencia');
            this.identificationForm.markAllAsTouched();
        }
    }

    edit(){
        if (this.identificationForm.valid) {
            const projectMember: ProjectMember = {
                controlNumber: this.identificationForm.get('controlNumber')?.value || '',
                firstName: this.identificationForm.get('firstName')?.value || '',
                lastName: this.identificationForm.get('lastName')?.value || '',
            };
            this.administratorService.updateProjectMembers(projectMember).subscribe(res => {
                if(res) {
                    this.toastr.success('Alumno actualizado exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/project-members'])
                } else {
                    this.toastr.error('Error al actualizar el nuevo alumno', 'Error');
                }
            });
        } else {
            this.toastr.warning('Campos vacios o erroneos', 'Advertencia');
            this.identificationForm.markAllAsTouched();
        }
    }

    data(){
        if(this.editBan || this.viewBan) {
            const idObject = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
            this.administratorService.findProjectMembers(idObject).subscribe(res => {
                this.projectMember = res;
                this.identificationForm.patchValue({
                    controlNumber: this.projectMember.controlNumber,
                    firstName: this.projectMember.firstName,
                    lastName: this.projectMember.lastName,
                });   
            });
        }
    }
}