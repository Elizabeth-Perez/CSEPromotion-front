import { Component, OnInit } from '@angular/core';
import { Career } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';

@Component({
    selector: 'administrator-career-page',
    templateUrl: './career-page.component.html',
    styleUrls: ['./career-page.component.scss']
})
export class CareerPageComponent implements OnInit{

    currentRoute: string = 'career';
    title: string = 'Carreras ';
    subTitle: string = 'Gestiona las carreras que ofrece el sitio web.';
    headers = [
        {name: 'Plan de estudios', class: 'study-program', field: 'studyProgram'},
        {name: 'Correo electronico', class: 'email', field: 'email'},
        {name: 'Telefono', class: 'phone', field: 'phone'},
        {name: 'Extension', class: 'extension', field: 'extension'},
        {name: 'Acciones', class: 'actions', field: ''},
    ];
    careers: Career[] = [];
    
    constructor(
        private administratorService: AdministratorService,
    ) { }

    ngOnInit(): void {
        this.administratorService.getCareers().subscribe( res => {
            this.careers = res;
        });
    }
}