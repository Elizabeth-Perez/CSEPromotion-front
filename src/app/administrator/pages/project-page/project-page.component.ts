import { Component } from '@angular/core';

@Component({
    selector: 'administrator-project-page',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.scss']
})
export class ProjectePageComponent {

    currentRoute: string = 'projects';
    title: string = 'Proyectos ';
    subTitle: string = 'Gestiona los proyectos que ofrece el sitio web.';

    constructor() { }

}