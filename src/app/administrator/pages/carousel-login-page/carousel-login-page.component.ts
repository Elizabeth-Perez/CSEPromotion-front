import { Component, OnInit } from '@angular/core';
import { Carousel, CarouselLogin, Entity, ProjectMember } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';

@Component({
    selector: 'administrator-carousel-login-page',
    templateUrl: './carousel-login-page.component.html',
    styleUrls: ['./carousel-login-page.component.scss']
})

export class CarouselLoginPageComponent implements OnInit {
    currentRoute: string = 'carousels-login';
    title: string = 'Imagenes login';
    subTitle: string = 'Gestiona las imagenes del login que ofrece el sitio web.';
    headers = [
        { name: 'ID', class: 'id-carousel-login', field: 'idCarouselLogin' },
        { name: 'Titulo', class: 'title', field: 'title' },
        { name: 'Descripcion', class: 'description', field: 'description' },
        { name: 'Acciones', class: 'actions', field: ''},
    ];    
    carouselsLogin: CarouselLogin[] = [];
    
    constructor(
        private administratorService: AdministratorService,
    ) { }

    ngOnInit(): void {
        this.administratorService.getCarouselsLogin().subscribe(res => {
            this.carouselsLogin = res;
        });
    }
}