import { Component } from '@angular/core';

@Component({
    selector: 'administrator-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

    currentRoute: string = 'home';
    title: string = 'Bienvenido ';
    subTitle: string = 'Aqui puedes ver un resumen de tu sitio web.';

    constructor() { }

}