import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Career, Entity, ProjectMember, Stay } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'administrator-stay-form',
    templateUrl: './stay-form.component.html',
    styleUrls: ['./stay-form.component.scss']
})

export class StayFormComponent implements OnInit {    
    currentRoute: string = 'stays';
    title: string = 'Administrador de estancias';
    subTitle: string = 'Complete todos los campos obligatorios para realizar alguna de las acciones.';
    addBan: boolean = false;
    editBan: boolean = false;
    viewBan: boolean = false;
    stay: Stay = {
        idStay: 0,
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
            if (currentUrl === 'stays/new') {
                this.addBan = true;
            } else if (currentUrl.startsWith('stays/view/')) {
                this.viewBan = true;
            } else if (currentUrl.startsWith('stays/')) {
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
            const stay: Stay = {
                idStay: 0,
                name: this.identificationForm.get('name')?.value || '',
            };
            this.administratorService.createStay(stay).subscribe(res => {
                if(res) {
                    this.toastr.success('Estancia creada exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/stays'])
                } else {
                    this.toastr.error('Error al crear la nueva estancia', 'Error');
                }
            });
        } else {
            this.toastr.warning('Campos vacios o erroneos', 'Advertencia');
            this.identificationForm.markAllAsTouched();
        }
    }

    edit(){
        if (this.identificationForm.valid) {
            const stay: Stay = {
                idStay: Number(this.activatedRoute.snapshot.paramMap.get('id') ?? ''),
                name: this.identificationForm.get('name')?.value || '',
            };
            this.administratorService.updateStay(stay).subscribe(res => {
                if(res) {
                    this.toastr.success('Estancia creada exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/stays'])
                } else {
                    this.toastr.error('Error al crear la nueva estancia', 'Error');
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
            this.administratorService.findStay(idObject).subscribe(res => {
                this.stay = res;
                this.identificationForm.patchValue({
                    name: this.stay.name
                });   
            });
        }
    }
}