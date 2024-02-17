import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Career, Entity, Opportunity, Participant, Stay } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'administrator-opportunity-form',
    templateUrl: './opportunity-form.component.html',
    styleUrls: ['./opportunity-form.component.scss']
})

export class opportunityFormComponent implements OnInit {
    currentRoute: string = 'opportunities';
    title: string = 'Administrador de oportunidades';
    subTitle: string = 'Complete todos los campos obligatorios para realizar alguna de las acciones.';
    addBan: boolean = false;
    editBan: boolean = false;
    viewBan: boolean = false;
    career: Career = {
        studyProgram: 'ISIC-2010-204',
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

    entity: Entity[] = []
    stay: Stay[] = []
    participant: Participant[] = []
    entitySelected: Entity = {
        idEntity: 0,
        name: ''
    };

    opportunity: Opportunity = {
        idOpportunity: 0,
        carrer: this.career,
        entity: this.entitySelected,
        stay: this.stay,
        participant: this.participant,
        imageURL: '',
        hyperlink: '',
        entityMap: '',
        participantMap: '',
        stayMap: '',
    }

    entityForm: FormGroup = new FormGroup({});
    stayForm: FormGroup = new FormGroup({});
    participantForm: FormGroup = new FormGroup({});
    propertiesForm: FormGroup = new FormGroup({});


    staySelected: Stay | undefined;
    participantSelected: Participant | undefined;

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
            if (currentUrl === 'opportunities/new') {
                this.addBan = true;
            } else if (currentUrl.startsWith('opportunities/view/')) {
                this.viewBan = true;
            } else if (currentUrl.startsWith('opportunities/')) {
                this.editBan = true;
            }
        });
        this.getEntity();
        this.getStay();
        this.getParticipant();
        this.data();
    }

    initForms() {
        this.entityForm = this.fb.group({
            entity: ['', Validators.required],
        });
        this.stayForm = this.fb.group({
            stay: ['', Validators.required],
        });
        this.participantForm = this.fb.group({
            participant: ['', Validators.required],
        });
        this.propertiesForm = this.fb.group({
            imageURL: ['', [Validators.required, Validators.maxLength(255)]],
            hyperlink: ['', [Validators.required, Validators.maxLength(255)]],
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
        if (this.entityForm.valid && this.stayForm.valid && this.participantForm.valid && this.propertiesForm.valid) {
            const opportunity: Opportunity = {
                idOpportunity: 0,
                entity: this.entitySelected,
                stay: this.staySelected ? [this.staySelected] : [],
                participant: this.participantSelected ? [this.participantSelected] : [],
                imageURL: this.propertiesForm.get('imageURL')?.value || '',
                hyperlink: this.propertiesForm.get('hyperlink')?.value || '',
                carrer: this.career,
                entityMap: '',
                participantMap: '',
                stayMap: ''
            };
            this.administratorService.createOpportunity(opportunity).subscribe(res => {
                if (res) {
                    this.toastr.success('Oportunidad creada exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/opportunities'])
                } else {
                    this.toastr.error('Error al crear la nueva oportunidad', 'Error');
                }
            });
        } else {
            this.toastr.warning('Campos vacios o erroneos', 'Advertencia');
            this.entityForm.markAllAsTouched();
            this.stayForm.markAllAsTouched();
            this.participantForm.markAllAsTouched();
            this.propertiesForm.markAllAsTouched();
        }
    }

    edit() {
        if (this.entityForm.valid && this.stayForm.valid && this.participantForm.valid && this.propertiesForm.valid) {
            const opportunity: Opportunity = {
                idOpportunity: Number(this.activatedRoute.snapshot.paramMap.get('id') ?? ''),
                entity: this.entitySelected,
                stay: this.staySelected ? [this.staySelected] : [],
                participant: this.participantSelected ? [this.participantSelected] : [],
                imageURL: this.propertiesForm.get('imageURL')?.value || '',
                hyperlink: this.propertiesForm.get('hyperlink')?.value || '',
                carrer: this.career,
                entityMap: '',
                participantMap: '',
                stayMap: ''
            };
            this.administratorService.updateOpportunity(opportunity).subscribe(res => {
                if (res) {
                    this.toastr.success('Oportunidad actualizada exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/opportunities'])
                } else {
                    this.toastr.error('Error al actualizar la nueva oportunidad', 'Error');
                }
            });
        } else {
            this.toastr.warning('Campos vacios o erroneos', 'Advertencia');
            this.entityForm.markAllAsTouched();
            this.stayForm.markAllAsTouched();
            this.participantForm.markAllAsTouched();
            this.propertiesForm.markAllAsTouched();
        }
    }

    data() {
        if (this.editBan || this.viewBan) {
            const idObject = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
            this.administratorService.findOpportunity(idObject).subscribe(res => {
                this.opportunity = res;
                this.entityForm.patchValue({
                    entity: this.opportunity.entity,
                });
                this.stayForm.patchValue({
                    stay: this.opportunity.stay,
                });
                this.participantForm.patchValue({
                    participant: this.opportunity.participant,
                });
                this.propertiesForm.patchValue({
                    imageURL: this.opportunity.imageURL,
                    hyperlink: this.opportunity.hyperlink,
                });
            });
        }
    }

    getEntity() {
        this.administratorService.getEntities().subscribe(res => {
            this.entity = res;
        });
    }

    getStay() {
        this.administratorService.getStays().subscribe(res => {
            this.stay = res;
        });
    }

    getParticipant() {
        this.administratorService.getParticipants().subscribe(res => {
            this.participant = res;
        });
    }

    selectEntity(): void {
        const entityId = this.entityForm.get('entity')?.value;
        this.entitySelected = this.entity?.find(e => e.idEntity === Number(entityId)) ?? { idEntity: 0, name: '' };
    }    

    selectStay(): void {
        const stayId = this.stayForm.get('stay')?.value;
        this.staySelected = this.stay?.find(s => s.idStay === Number(stayId));
    }

    selectParticipant(): void {
        const participantId = this.participantForm.get('participant')?.value;
        this.participantSelected = this.participant?.find(s => s.idParticipant === Number(participantId));
    }
}