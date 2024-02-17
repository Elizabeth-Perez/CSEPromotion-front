import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Career } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'administrator-career-form',
    templateUrl: './career-form.component.html',
    styleUrls: ['./career-form.component.scss']
})

export class CareerFormComponent implements OnInit {    
    currentRoute: string = 'career';
    title: string = 'Administrador de carreras';
    subTitle: string = 'Complete todos los campos obligatorios para realizar alguna de las acciones.';
    addBan: boolean = false;
    editBan: boolean = false;
    viewBan: boolean = false;
    career: Career = {
        studyProgram: '',
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

    identificationForm: FormGroup = new FormGroup({});
    identityForm: FormGroup = new FormGroup({});
    profilesForm: FormGroup = new FormGroup({});
    academyForm: FormGroup = new FormGroup({});
    socialForm: FormGroup = new FormGroup({});

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
            if (currentUrl === 'career/new') {
                this.addBan = true;
            } else if (currentUrl.startsWith('career/view/')) {
                this.viewBan = true;
            } else if (currentUrl.startsWith('career/')) {
                this.editBan = true;
            }
        });
        this.data();
    }

    initForms(){
        this.identificationForm = this.fb.group({
            studyProgram: ['', [Validators.required, Validators.maxLength(15)]],
            extension: ['', [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
            phone: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
            email: ['', [Validators.required, Validators.maxLength(100), Validators.email]],
        });
        this.identityForm = this.fb.group({
            mission: ['', [Validators.required, Validators.maxLength(500)]],
            vision: ['', [Validators.required, Validators.maxLength(500)]],
            programPurpose: ['', [Validators.required, Validators.maxLength(500)]],
            actionField: ['', [Validators.required, Validators.maxLength(500)]],
        });
        this.profilesForm = this.fb.group({
            admissionProfile: ['', [Validators.required, Validators.maxLength(500)]],
            graduationProfile: ['', [Validators.required, Validators.maxLength(500)]],
        });
        this.academyForm = this.fb.group({
            studyGridUrl: ['', [Validators.required, Validators.maxLength(255)]],
            chartUrl: ['', [Validators.required, Validators.maxLength(255)]],
        });
        this.socialForm = this.fb.group({
            snFacebook: ['', [Validators.required, Validators.maxLength(255)]],
            snYoutube: ['', [Validators.required, Validators.maxLength(255)]],
            snLinkedin: ['', [Validators.required, Validators.maxLength(255)]],
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
        if (this.identificationForm.valid && this.identityForm.valid && this.profilesForm.valid && this.academyForm.valid && this.socialForm.valid) {
            const career: Career = {
                studyProgram: this.identificationForm.get('studyProgram')?.value || '',
                extension: this.identificationForm.get('extension')?.value || '',
                phone: this.identificationForm.get('phone')?.value || '',
                email: this.identificationForm.get('email')?.value || '',
                studyGridUrl: this.academyForm.get('studyGridUrl')?.value || '',
                chartUrl: this.academyForm.get('chartUrl')?.value || '',
                mission: this.identityForm.get('mission')?.value || '',
                vision: this.identityForm.get('vision')?.value || '',
                programPurpose: this.identityForm.get('programPurpose')?.value || '',
                actionField: this.identityForm.get('actionField')?.value || '',
                admissionProfile: this.profilesForm.get('admissionProfile')?.value || '',
                graduationProfile: this.profilesForm.get('graduationProfile')?.value || '',
                snFacebook: this.socialForm.get('snFacebook')?.value || '',
                snYoutube: this.socialForm.get('snYoutube')?.value || '',
                snLinkedin: this.socialForm.get('snLinkedin')?.value || '',
                status: 'Inactivo'
            };
            this.administratorService.createCareer(career).subscribe(res => {
                if(res) {
                    this.toastr.success('Carrera creada exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/career'])
                } else {
                    this.toastr.error('Error al crear la nueva carrera', 'Error');
                }
            });
        } else {
            this.toastr.warning('Campos vacios o erroneos', 'Advertencia');
            this.identificationForm.markAllAsTouched();
            this.identityForm.markAllAsTouched();
            this.profilesForm.markAllAsTouched();
            this.academyForm.markAllAsTouched();
            this.socialForm.markAllAsTouched();
        }
    }

    edit(){
        if (this.identificationForm.valid && this.identityForm.valid && this.profilesForm.valid && this.academyForm.valid && this.socialForm.valid) {
            const career: Career = {
                studyProgram: this.identificationForm.get('studyProgram')?.value || '',
                extension: this.identificationForm.get('extension')?.value || '',
                phone: this.identificationForm.get('phone')?.value || '',
                email: this.identificationForm.get('email')?.value || '',
                studyGridUrl: this.academyForm.get('studyGridUrl')?.value || '',
                chartUrl: this.academyForm.get('chartUrl')?.value || '',
                mission: this.identityForm.get('mission')?.value || '',
                vision: this.identityForm.get('vision')?.value || '',
                programPurpose: this.identityForm.get('programPurpose')?.value || '',
                actionField: this.identityForm.get('actionField')?.value || '',
                admissionProfile: this.profilesForm.get('admissionProfile')?.value || '',
                graduationProfile: this.profilesForm.get('graduationProfile')?.value || '',
                snFacebook: this.socialForm.get('snFacebook')?.value || '',
                snYoutube: this.socialForm.get('snYoutube')?.value || '',
                snLinkedin: this.socialForm.get('snLinkedin')?.value || '',
                status: 'Inactivo'
            };
            this.administratorService.updateCareer(career).subscribe(res => {
                if(res) {
                    this.toastr.success('Carrera actualizada exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/career'])
                } else {
                    this.toastr.error('Error al actualizar la nueva carrera', 'Error');
                }
            });
        } else {
            this.toastr.warning('Campos vacios o erroneos', 'Advertencia');
            this.identificationForm.markAllAsTouched();
            this.identityForm.markAllAsTouched();
            this.profilesForm.markAllAsTouched();
            this.academyForm.markAllAsTouched();
            this.socialForm.markAllAsTouched();
        }
    }

    data(){
        if(this.editBan || this.viewBan) {
            const idObject = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
            this.administratorService.findCareer(idObject).subscribe(res => {
                this.career = res;
                this.identificationForm.patchValue({
                    studyProgram: this.career.studyProgram,
                    extension: this.career.extension,
                    phone: this.career.phone,
                    email: this.career.email,
                });
                this.identityForm.patchValue({
                    mission: this.career.mission,
                    vision: this.career.vision,
                    programPurpose: this.career.programPurpose,
                    actionField: this.career.actionField,
                });
                this.profilesForm.patchValue({
                    admissionProfile: this.career.admissionProfile,
                    graduationProfile: this.career.graduationProfile,
                });
                this.academyForm.patchValue({
                    studyGridUrl: this.career.studyGridUrl,
                    chartUrl: this.career.chartUrl,
                });
                this.socialForm.patchValue({
                    snFacebook: this.career.snFacebook,
                    snYoutube: this.career.snYoutube,
                    snLinkedin: this.career.snLinkedin,
                });     
            });
        }
    }
}