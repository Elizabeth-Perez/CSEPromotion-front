import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Career, Category, Entity, ProjectMember, Stay } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'administrator-category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.scss']
})

export class CategoryFormComponent implements OnInit {    
    currentRoute: string = 'categories';
    title: string = 'Administrador de categorias';
    subTitle: string = 'Complete todos los campos obligatorios para realizar alguna de las acciones.';
    addBan: boolean = false;
    editBan: boolean = false;
    viewBan: boolean = false;
    category: Category = {
        idCategory: 0,
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
            if (currentUrl === 'categories/new') {
                this.addBan = true;
            } else if (currentUrl.startsWith('categories/view/')) {
                this.viewBan = true;
            } else if (currentUrl.startsWith('categories/')) {
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
            const category: Category = {
                idCategory: 0,
                name: this.identificationForm.get('name')?.value || '',
            };
            this.administratorService.createCategory(category).subscribe(res => {
                if(res) {
                    this.toastr.success('Categoria creada exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/categories'])
                } else {
                    this.toastr.error('Error al crear la nueva categoria', 'Error');
                }
            });
        } else {
            this.toastr.warning('Campos vacios o erroneos', 'Advertencia');
            this.identificationForm.markAllAsTouched();
        }
    }

    edit(){
        if (this.identificationForm.valid) {
            const category: Category = {
                idCategory: Number(this.activatedRoute.snapshot.paramMap.get('id') ?? ''),
                name: this.identificationForm.get('name')?.value || '',
            };
            this.administratorService.updateCategory(category).subscribe(res => {
                if(res) {
                    this.toastr.success('Categoria creada exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/categories'])
                } else {
                    this.toastr.error('Error al crear la nueva categoria', 'Error');
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
            this.administratorService.findCategory(idObject).subscribe(res => {
                this.category = res;
                this.identificationForm.patchValue({
                    name: this.category.name
                });   
            });
        }
    }
}