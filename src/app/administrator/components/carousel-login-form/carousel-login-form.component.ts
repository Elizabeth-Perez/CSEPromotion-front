import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Career, Carousel, CarouselLogin, Category, Entity, ProjectMember, Stay } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'administrator-carousel-login-form',
    templateUrl: './carousel-login-form.component.html',
    styleUrls: ['./carousel-login-form.component.scss']
})

export class CarouselLoginFormComponent implements OnInit {    
    currentRoute: string = 'carousels-login';
    title: string = 'Administrador de Imagenes login';
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

    carousels: Carousel[] = []
    
    carouselAlone: Carousel = {
        idCarousel: 0,
        carrer: this.career,
        imageUrl: '',
        owner: ''
    };

    carouselLogin: CarouselLogin = {
        idCarouselLogin: 0,
        carousel: this.carouselAlone,
        title: '',
        description: ''
    };

    identificationForm: FormGroup = new FormGroup({});
    carouselSelected: string = ''

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
            if (currentUrl === 'carousels-login/new') {
                this.addBan = true;
            } else if (currentUrl.startsWith('carousels-login/view/')) {
                this.viewBan = true;
            } else if (currentUrl.startsWith('carousels-login/')) {
                this.editBan = true;
            }
        });
        this.getCarousels();
        this.data();
    }

    initForms(){
        this.identificationForm = this.fb.group({
            carousel: ['', Validators.required],
            title: ['', [Validators.required, Validators.maxLength(100)]],
            description: ['', [Validators.required, Validators.maxLength(255)]],
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
            const carouselLogin: CarouselLogin = {
                idCarouselLogin: 0,
                carousel: this.carouselAlone,
                title: this.identificationForm.get('title')?.value || '',
                description: this.identificationForm.get('description')?.value || '',
            };
            console.log(carouselLogin);
            this.administratorService.createCarouselLogin(carouselLogin).subscribe(res => {
                if(res) {
                    this.toastr.success('Datos de la imagen subidos exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/carousels-login'])
                } else {
                    this.toastr.error('Error al subir los nuevos datos de la imagen', 'Error');
                }
            });
        } else {
            this.toastr.warning('Campos vacios o erroneos', 'Advertencia');
            this.identificationForm.markAllAsTouched();
        }
    }

    edit(){
        if (this.identificationForm.valid) {
            const carouselLogin: CarouselLogin = {
                idCarouselLogin: Number(this.activatedRoute.snapshot.paramMap.get('id') ?? ''),
                carousel: this.carouselAlone,
                title: this.identificationForm.get('title')?.value || '',
                description: this.identificationForm.get('description')?.value || '',
            };
            this.administratorService.updateCarouselLogin(carouselLogin).subscribe(res => {
                if(res) {
                    this.toastr.success('Datos de la imagen subidos exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/carousels-login'])
                } else {
                    this.toastr.error('Error al subir los nuevos datos de la imagen', 'Error');
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
            this.administratorService.findCarouselLogin(idObject).subscribe(res => {
                this.carouselLogin = res;
                this.identificationForm.patchValue({
                    carousel: this.carouselLogin.idCarouselLogin,
                    title: this.carouselLogin.title,
                    description: this.carouselLogin.description
                });   
            });
        }
    }

    selectCarousel(): void {
        this.carouselSelected = this.identificationForm.get('carousel')?.value;
        this.administratorService.findCarousel(this.carouselSelected).subscribe(res => {
            this.carouselAlone = res;
        })
    }

    getCarousels(): void {
        this.administratorService.getCarousels().subscribe(res => {
            this.carousels = res.filter(c => c.owner === 'Login');
        });
    }
    
    
}