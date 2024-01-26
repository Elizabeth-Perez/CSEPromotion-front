import { Component } from '@angular/core';

@Component({
    selector: 'administrator-program-page',
    templateUrl: './program-page.component.html',
    styleUrls: ['./program-page.component.scss']
})
export class ProgramPageComponent {

    currentRoute: string = 'programs';
    title: string = 'Programas ';
    subTitle: string = 'Gestiona los programas que ofrece el sitio web.';

    constructor() { }

}