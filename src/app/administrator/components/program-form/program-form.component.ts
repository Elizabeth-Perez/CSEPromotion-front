import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Career, Program, ProgramType } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'administrator-program-form',
    templateUrl: './program-form.component.html',
    styleUrls: ['./program-form.component.scss']
})

export class ProgramFormComponent implements OnInit {
    currentRoute: string = 'programs';
    title: string = 'Administrador de programas';
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

    programType: ProgramType[] = []
    programTypeSelected: ProgramType = {
        idProgramType: 0,
        name: ''
    }
    
    program: Program = {
        idProgram: 0,
        carrer: this.career,
        programType: this.programTypeSelected,
        name: '',
        description: '',
        imageUrl: '',
        hyperlink: '',
        programMap: ''
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
            if (currentUrl === 'programs/new') {
                this.addBan = true;
            } else if (currentUrl.startsWith('programs/view/')) {
                this.viewBan = true;
            } else if (currentUrl.startsWith('programs/')) {
                this.editBan = true;
            }
        });
        this.getProgramType();
        this.data();
    }

    initForms() {
        this.identificationForm = this.fb.group({
            name: ['', [Validators.required, Validators.maxLength(255)]],
            description: ['', [Validators.required, Validators.maxLength(255)]],
        });
        this.propertiesForm = this.fb.group({
            hyperlink: ['', [Validators.required, Validators.maxLength(255)]],
            imageUrl: ['', [Validators.required, Validators.maxLength(255)]],
            programType: ['', Validators.required],
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
            const program: Program = {
                idProgram: 0,
                name: this.identificationForm.get('name')?.value || '',
                description: this.identificationForm.get('description')?.value || '',
                hyperlink: this.propertiesForm.get('hyperlink')?.value || '',
                imageUrl: this.propertiesForm.get('imageUrl')?.value || '',
                programType: this.programTypeSelected,
                carrer: this.career,
                programMap: ''
            };
            this.administratorService.createProgram(program).subscribe(res => {
                if (res) {
                    this.toastr.success('Programa creado exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/programs'])
                } else {
                    this.toastr.error('Error al crear el nuevo programa', 'Error');
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
            const program: Program = {
                idProgram: Number(this.activatedRoute.snapshot.paramMap.get('id') ?? ''),
                name: this.identificationForm.get('name')?.value || '',
                description: this.identificationForm.get('description')?.value || '',
                hyperlink: this.propertiesForm.get('hyperlink')?.value || '',
                imageUrl: this.propertiesForm.get('imageUrl')?.value || '',
                programType: this.programTypeSelected,
                carrer: this.career,
                programMap: ''
            };
            this.administratorService.updateProgram(program).subscribe(res => {
                if (res) {
                    this.toastr.success('Programa actualizado exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/programs'])
                } else {
                    this.toastr.error('Error al actualizar el nuevo programa', 'Error');
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
            this.administratorService.findProgram(idObject).subscribe(res => {
                this.program = res;
                this.identificationForm.patchValue({
                    name: this.program.name,
                    description: this.program.description,
                });
                this.propertiesForm.patchValue({
                    hyperlink: this.program.hyperlink,
                    imageUrl: this.program.imageUrl,
                    programType: this.program.programType,
                });
            });
        }
    }
    
    getProgramType() {
        this.administratorService.getProgramType().subscribe(res => {
            this.programType = res;
        });
    }

    selectProgramType(): void {
        const programTypeId = this.propertiesForm.get('programType')?.value;
        this.programTypeSelected = this.programType?.find(pt => pt.idProgramType === Number(programTypeId)) ?? { idProgramType: 0, name: '' };
    }
}