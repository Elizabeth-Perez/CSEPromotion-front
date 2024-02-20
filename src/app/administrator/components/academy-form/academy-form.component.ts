import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Academy, Career, ProjectMember } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'administrator-academy-form',
    templateUrl: './academy-form.component.html',
    styleUrls: ['./academy-form.component.scss']
})

export class AcademyFormComponent implements OnInit {    
    currentRoute: string = 'academy';
    title: string = 'Administrador de academia';
    subTitle: string = 'Complete todos los campos obligatorios para realizar alguna de las acciones.';
    addBan: boolean = false;
    editBan: boolean = false;
    viewBan: boolean = false;
    career: Career = {
        studyProgram: 'ISIC-2010-224',
        extension: '',
        phone: '',
        email: '',
        studyGridUrl: '',
        chartUrl: '',
        mission: '',
        vision: '',
        programPurpose: '',
        actionField: '',
        admissionProfile: '',
        graduationProfile: '',
        snFacebook: '',
        snYoutube: '',
        snLinkedin: '',
        status: ''
    };

    academy: Academy = {
        teacherEnrollment: '',
        carrer: this.career,
        firstName: '',
        lastName: '',
        degree: '',
        rol: '',
        email: ''
    };

    identificationForm: FormGroup = new FormGroup({});
    degreeSelected: string = ''
    rolSelected: string = ''

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
            if (currentUrl === 'academy/new') {
                this.addBan = true;
            } else if (currentUrl.startsWith('academy/view/')) {
                this.viewBan = true;
            } else if (currentUrl.startsWith('academy/')) {
                this.editBan = true;
            }
        });
        this.data();
    }

    initForms(){
        this.identificationForm = this.fb.group({
            teacherEnrollment: ['', [Validators.required, Validators.maxLength(15)]],
            firstName: ['', [Validators.required, Validators.maxLength(50)]],
            lastName: ['', [Validators.required, Validators.maxLength(50)]],
            degree: ['', [Validators.required, Validators.maxLength(15)]],
            rol: ['', [Validators.required, Validators.maxLength(15)]],
            email: ['', [Validators.required, Validators.maxLength(100), Validators.email]],
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
            const academy: Academy = {
                teacherEnrollment: this.identificationForm.get('teacherEnrollment')?.value || '',
                firstName: this.identificationForm.get('firstName')?.value || '',
                lastName: this.identificationForm.get('lastName')?.value || '',
                degree: this.degreeSelected,
                rol: this.rolSelected,
                email: this.identificationForm.get('email')?.value || '',
                carrer: this.career
            };
            this.administratorService.createAcademy(academy).subscribe(res => {
                if(res) {
                    this.toastr.success('Miembro de la academia creado exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/academy'])
                } else {
                    this.toastr.error('Error al crear el nuevo miembro de la academia', 'Error');
                }
            });
        } else {
            this.toastr.warning('Campos vacios o erroneos', 'Advertencia');
            this.identificationForm.markAllAsTouched();
        }
    }

    edit(){
        if (this.identificationForm.valid) {
            const academy: Academy = {
                teacherEnrollment: this.identificationForm.get('teacherEnrollment')?.value || '',
                firstName: this.identificationForm.get('firstName')?.value || '',
                lastName: this.identificationForm.get('lastName')?.value || '',
                degree: this.degreeSelected,
                rol: this.rolSelected,
                email: this.identificationForm.get('email')?.value || '',
                carrer: this.career
            };
            this.administratorService.updateAcademy(academy).subscribe(res => {
                if(res) {
                    this.toastr.success('Miembro de la academia creado exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/academy'])
                } else {
                    this.toastr.error('Error al crear el nuevo miembro de la academia', 'Error');
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
            this.administratorService.findAcademy(idObject).subscribe(res => {
                this.academy = res;
                this.identificationForm.patchValue({
                    teacherEnrollment: this.academy.teacherEnrollment,
                    firstName: this.academy.firstName,
                    lastName: this.academy.lastName,
                    degree: this.academy.degree,
                    rol: this.academy.rol,
                    email: this.academy.email,
                });   
            });
        }
    }


    selectDegree(): void {
        this.degreeSelected = this.identificationForm.get('degree')?.value;
    }

    selectRol(): void {
        this.rolSelected = this.identificationForm.get('rol')?.value;
    }
}