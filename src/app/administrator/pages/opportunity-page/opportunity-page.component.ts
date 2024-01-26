import { Component } from '@angular/core';

@Component({
    selector: 'administrator-home-page',
    templateUrl: './opportunity-page.component.html',
    styleUrls: ['./opportunity-page.component.scss']
})
export class OpportunityPageComponent {

    currentRoute: string = 'opportunities';
    title: string = 'Oportunidades ';
    subTitle: string = 'Gestiona las oportunidades que ofrece el sitio web.';

    constructor() { }

}