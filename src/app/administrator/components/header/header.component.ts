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
        } else {
            console.error('No se pudo determinar la ruta del formulario para esta página.');
            return '';
        }
    }
}