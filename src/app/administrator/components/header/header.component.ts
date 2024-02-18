import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'administrator-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    @Input() title: string = '';
    @Input() subTitle: string = '';
    @Input() searchBan: boolean = true;

    constructor(
        private route: ActivatedRoute,
        ) { }

    getNewRecordFormRoute(): string {
        const currentRoute = this.route.snapshot.url[0].path;
        if (currentRoute === 'career') {
            return '/administrator/career/new';
        } else if (currentRoute === 'projects') {
            return '/administrator/projects/new';
        } else if (currentRoute === 'programs') {
            return '/administrator/programs/new';
        } else if (currentRoute === 'specialities') {
            return '/administrator/specialities/new';
        } else if (currentRoute === 'opportunities') {
            return '/administrator/opportunities/new';
        } else if (currentRoute === 'project-members') {
            return '/administrator/project-members/new';
        } else if (currentRoute === 'academy') {
            return '/administrator/academy/new';
        } else if (currentRoute === 'entities') {
            return '/administrator/entities/new';
        } else if (currentRoute === 'stays') {
            return '/administrator/stays/new';
        } else if (currentRoute === 'categories') {
            return '/administrator/categories/new';
        } else if (currentRoute === 'carousels') {
            return '/administrator/carousels/new';
        } else if (currentRoute === 'carousels-login') {
            return '/administrator/carousels-login/new';
        } else if (currentRoute === 'home') {
            return '';
        } else {
            console.error('No se pudo determinar la ruta del formulario para esta página.');
            return '';
        }
    }
}