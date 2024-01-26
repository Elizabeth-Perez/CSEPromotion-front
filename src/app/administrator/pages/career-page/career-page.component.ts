import { Component } from '@angular/core';

@Component({
    selector: 'administrator-home-page',
    templateUrl: './career-page.component.html',
    styleUrls: ['./career-page.component.scss']
})
export class CareerPageComponent {

    currentRoute: string = 'career';
    title: string = 'Carreras ';
    subTitle: string = 'Gestiona las carreras que ofrece el sitio web.';

    constructor() { }

}