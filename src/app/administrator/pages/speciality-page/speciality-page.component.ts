import { Component } from '@angular/core';
import { AdministratorService } from '../../services/administrator.service';
import { Speciality } from '../../interfaces/administrator.interface';

@Component({
    selector: 'administrator-home-page',
    templateUrl: './speciality-page.component.html',
    styleUrls: ['./speciality-page.component.scss']
})
export class SpecialityPageComponent {

    currentRoute: string = 'specialities';
    title: string = 'Especialidades ';
    subTitle: string = 'Gestiona las especialidades que ofrece el sitio web.';
    headers = [
        {name: 'ID', class: 'key-speciality', field: 'keySpeciality'},
        {name: 'Nombre', class: 'name', field: 'name'},
        {name: 'Definicion', class: 'definition', field: 'definition'},
        {name: 'Acciones', class: 'actions', field: ''},
    ];
    specialities: Speciality[] = [];
    
    constructor(
        private administratorService: AdministratorService,
    ) { }

    ngOnInit(): void {
        this.administratorService.getSpecialities().subscribe( res => {
            this.specialities = res;
        });
    }

}