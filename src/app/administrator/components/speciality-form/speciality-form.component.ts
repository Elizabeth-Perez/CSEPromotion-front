import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Career, Speciality } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'administrator-speciality-form',
    templateUrl: './speciality-form.component.html',
    styleUrls: ['./speciality-form.component.scss']
})

export class SpecialityFormComponent implements OnInit {
    currentRoute: string = 'specialities';
    title: string = 'Administrador de especialidades';
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

    speciality: Speciality = {
        keySpeciality: '',
        carrer: this.career,
        name: '',
        definition: '',
        imageUrl: ''
    }

    identificationForm: FormGroup = new FormGroup({});
    propertiesForm: FormGroup = new FormGroup({});

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
            if (currentUrl === 'specialities/new') {
                this.addBan = true;
            } else if (currentUrl.startsWith('specialities/view/')) {
                this.viewBan = true;
            } else if (currentUrl.startsWith('specialities/')) {
                this.editBan = true;
            }
        });
        this.data();
    }

    initForms() {
        this.identificationForm = this.fb.group({
            keySpeciality: ['', [Validators.required, Validators.maxLength(8)]],
            name: ['', [Validators.required, Validators.maxLength(100)]],
        });
        this.propertiesForm = this.fb.group({
            definition: ['', [Validators.required, Validators.maxLength(255)]],
            imageUrl: ['', [Validators.required, Validators.maxLength(255)]],
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
        if (this.identificationForm.valid && this.propertiesForm.valid) {
            const speciality: Speciality = {
                keySpeciality: this.identificationForm.get('keySpeciality')?.value || '',
                name: this.identificationForm.get('name')?.value || '',
                definition: this.propertiesForm.get('definition')?.value || '',
                imageUrl: this.propertiesForm.get('imageUrl')?.value || '',
                carrer: this.career,
            };
            this.administratorService.createSpeciality(speciality).subscribe(res => {
                if (res) {
                    this.toastr.success('Especialidad creada exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/specialities'])
                } else {
                    this.toastr.error('Error al crear la nueva especialidad', 'Error');
                }
            });
        } else {
            this.toastr.warning('Campos vacios o erroneos', 'Advertencia');
            this.identificationForm.markAllAsTouched();
            this.propertiesForm.markAllAsTouched();
        }
    }

    edit() {
        if (this.identificationForm.valid && this.propertiesForm.valid) {
            const speciality: Speciality = {
                keySpeciality: this.identificationForm.get('keySpeciality')?.value || '',
                name: this.identificationForm.get('name')?.value || '',
                definition: this.propertiesForm.get('definition')?.value || '',
                imageUrl: this.propertiesForm.get('imageUrl')?.value || '',
                carrer: this.career,
            };
            this.administratorService.updateSpeciality(speciality).subscribe(res => {
                if (res) {
                    this.toastr.success('Especialidad actualizada exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/specialities'])
                } else {
                    this.toastr.error('Error al actualizar la nueva especialidad', 'Error');
                }
            });
        } else {
            this.toastr.warning('Campos vacios o erroneos', 'Advertencia');
            this.identificationForm.markAllAsTouched();
            this.propertiesForm.markAllAsTouched();
        }
    }

    data() {
        if (this.editBan || this.viewBan) {
            const idObject = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
            this.administratorService.findSpeciality(idObject).subscribe(res => {
                this.speciality = res;
                this.identificationForm.patchValue({
                    keySpeciality: this.speciality.keySpeciality,
                    name: this.speciality.name,
                });
                this.propertiesForm.patchValue({
                    definition: this.speciality.definition,
                    imageUrl: this.speciality.imageUrl,
                });
            });
        }
    }
}