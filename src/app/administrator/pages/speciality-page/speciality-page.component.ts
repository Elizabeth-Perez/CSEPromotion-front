import { Component } from '@angular/core';

@Component({
    selector: 'administrator-home-page',
    templateUrl: './speciality-page.component.html',
    styleUrls: ['./speciality-page.component.scss']
})
export class SpecialityPageComponent {

    currentRoute: string = 'specialities';
    title: string = 'Especialidades ';
    subTitle: string = 'Gestiona las especialidades que ofrece el sitio web.';

    constructor() { }

}