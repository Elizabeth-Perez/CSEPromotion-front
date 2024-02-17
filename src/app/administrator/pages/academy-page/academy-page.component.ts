import { Component, OnInit } from '@angular/core';
import { Academy, ProjectMember } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';

@Component({
    selector: 'administrator-academy-page',
    templateUrl: './academy-page.component.html',
    styleUrls: ['./academy-page.component.scss']
})

export class AcademyPageComponent implements OnInit {
    currentRoute: string = 'academy';
    title: string = 'Academia ';
    subTitle: string = 'Gestiona la academia que ofrece el sitio web.';
    headers = [
        { name: 'Numero de control', class: 'control-number', field: 'teacherEnrollment' },
        { name: 'Grado', class: 'degree', field: 'degree' },
        { name: 'Rol', class: 'rol', field: 'rol' },
        { name: 'Primer nombre', class: 'first-name', field: 'firstName' },
        { name: 'Segundo nombre', class: 'last-name', field: 'lastName' },
        { name: 'Correo electronico', class: 'email', field: 'email' },
        { name: 'Acciones', class: 'actions', field: ''},
    ];    
    academy: Academy[] = [];
    
    constructor(
        private administratorService: AdministratorService,
    ) { }

    ngOnInit(): void {
        this.administratorService.getAcademy().subscribe(res => {
            this.academy = res;
        });
    }
}