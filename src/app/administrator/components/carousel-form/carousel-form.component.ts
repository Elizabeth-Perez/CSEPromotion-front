import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Career, Carousel, Category, Entity, ProjectMember, Stay } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'administrator-carousel-form',
    templateUrl: './carousel-form.component.html',
    styleUrls: ['./carousel-form.component.scss']
})

export class CarouselFormComponent implements OnInit {    
    currentRoute: string = 'carousels';
    title: string = 'Administrador de carruseles';
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
    carousel: Carousel = {
        idCarousel: 0,
        carrer: this.career,
        imageUrl: '',
        owner: ''
    };

    identificationForm: FormGroup = new FormGroup({});
    ownerSelected: string = ''

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
            if (currentUrl === 'carousels/new') {
                this.addBan = true;
            } else if (currentUrl.startsWith('carousels/view/')) {
                this.viewBan = true;
            } else if (currentUrl.startsWith('carousels/')) {
                this.editBan = true;
            }
        });
        this.data();
    }

    initForms(){
        this.identificationForm = this.fb.group({
            imageUrl: ['', [Validators.required, Validators.maxLength(255)]],
            owner: ['', Validators.required],
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
            const carousel: Carousel = {
                idCarousel: 0,
                imageUrl: this.identificationForm.get('imageUrl')?.value || '',
                owner: this.ownerSelected,
                carrer: this.career,
            };
            this.administratorService.createCarousel(carousel).subscribe(res => {
                if(res) {
                    this.toastr.success('Imagen subida exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/carousels'])
                } else {
                    this.toastr.error('Error al subir la nueva imagen', 'Error');
                }
            });
        } else {
            this.toastr.warning('Campos vacios o erroneos', 'Advertencia');
            this.identificationForm.markAllAsTouched();
        }
    }

    edit(){
        if (this.identificationForm.valid) {
            const carousel: Carousel = {
                idCarousel: Number(this.activatedRoute.snapshot.paramMap.get('id') ?? ''),
                imageUrl: this.identificationForm.get('imageUrl')?.value || '',
                owner: this.ownerSelected,
                carrer: this.career,
            };
            this.administratorService.updateCarousel(carousel).subscribe(res => {
                if(res) {
                    this.toastr.success('Imagen subir exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/carousels'])
                } else {
                    this.toastr.error('Error al subir la nueva imagen', 'Error');
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
            this.administratorService.findCarousel(idObject).subscribe(res => {
                this.carousel = res;
                this.identificationForm.patchValue({
                    imageUrl: this.carousel.imageUrl,
                    owner: this.carousel.owner
                });   
            });
        }
    }

    selectOwner(): void {
        this.ownerSelected = this.identificationForm.get('owner')?.value;
    }
}