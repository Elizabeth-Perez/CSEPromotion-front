import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Career, Entity, ProjectMember } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'administrator-entity-form',
    templateUrl: './entity-form.component.html',
    styleUrls: ['./entity-form.component.scss']
})

export class EntityFormComponent implements OnInit {    
    currentRoute: string = 'entities';
    title: string = 'Administrador de entidades';
    subTitle: string = 'Complete todos los campos obligatorios para realizar alguna de las acciones.';
    addBan: boolean = false;
    editBan: boolean = false;
    viewBan: boolean = false;
    entity: Entity = {
        idEntity: 0,
        name: '',
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
            if (currentUrl === 'entities/new') {
                this.addBan = true;
            } else if (currentUrl.startsWith('entities/view/')) {
                this.viewBan = true;
            } else if (currentUrl.startsWith('entities/')) {
                this.editBan = true;
            }
        });
        this.data();
    }

    initForms(){
        this.identificationForm = this.fb.group({
            name: ['', [Validators.required, Validators.maxLength(100)]],
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
            const entity: Entity = {
                idEntity: 0,
                name: this.identificationForm.get('name')?.value || '',
            };
            this.administratorService.createEntity(entity).subscribe(res => {
                if(res) {
                    this.toastr.success('Entidad creada exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/entities'])
                } else {
                    this.toastr.error('Error al crear la nueva entidad', 'Error');
                }
            });
        } else {
            this.toastr.warning('Campos vacios o erroneos', 'Advertencia');
            this.identificationForm.markAllAsTouched();
        }
    }

    edit(){
        if (this.identificationForm.valid) {
            const entity: Entity = {
                idEntity: Number(this.activatedRoute.snapshot.paramMap.get('id') ?? ''),
                name: this.identificationForm.get('name')?.value || '',
            };
            this.administratorService.updateEntity(entity).subscribe(res => {
                if(res) {
                    this.toastr.success('Entidad creada exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/entities'])
                } else {
                    this.toastr.error('Error al crear la nueva entidad', 'Error');
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
            this.administratorService.findEntity(idObject).subscribe(res => {
                this.entity = res;
                this.identificationForm.patchValue({
                    name: this.entity.name
                });   
            });
        }
    }
}