import { Component, OnInit } from '@angular/core';
import { Carousel, Entity, ProjectMember } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';

@Component({
    selector: 'administrator-carousel-page',
    templateUrl: './carousel-page.component.html',
    styleUrls: ['./carousel-page.component.scss']
})

export class CarouselPageComponent implements OnInit {
    currentRoute: string = 'carousels';
    title: string = 'Carruseles';
    subTitle: string = 'Gestiona las imagenes que ofrece el sitio web.';
    headers = [
        { name: 'ID', class: 'id-carousel', field: 'idCarousel' },
        { name: 'URL Imagen', class: 'image-url', field: 'imageUrl' },
        { name: 'Ubicacion', class: 'owner', field: 'owner' },
        { name: 'Acciones', class: 'actions', field: ''},
    ];    
    carousels: Carousel[] = [];
    
    constructor(
        private administratorService: AdministratorService,
    ) { }

    ngOnInit(): void {
        this.administratorService.getCarousels().subscribe(res => {
            this.carousels = res;
        });
    }
}