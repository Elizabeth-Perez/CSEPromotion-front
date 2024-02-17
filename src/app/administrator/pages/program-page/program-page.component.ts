import { Component } from '@angular/core';
import { Program } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';

@Component({
    selector: 'administrator-program-page',
    templateUrl: './program-page.component.html',
    styleUrls: ['./program-page.component.scss']
})
export class ProgramPageComponent {

    currentRoute: string = 'programs';
    title: string = 'Programas ';
    subTitle: string = 'Gestiona los programas que ofrece el sitio web.';
    headers = [
        {name: 'ID', class: 'id-program', field: 'idProgram'},
        {name: 'Nombre', class: 'name', field: 'name'},
        {name: 'Description', class: 'description', field: 'description'},
        {name: 'Tipo', class: 'id-program-type', field: 'programMap'},
        {name: 'Acciones', class: 'actions', field: ''},
    ];
    programs: Program[] = [];
    
    constructor(
        private administratorService: AdministratorService,
    ) { }

    ngOnInit(): void {
        this.administratorService.getPrograms().subscribe( res => {
            this.programs = res.map(program => {
                program.programMap = program.programType.name;
                return program;
            });
        });
    }

}