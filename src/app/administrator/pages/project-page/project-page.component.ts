import { Component } from '@angular/core';
import { Project } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';

@Component({
    selector: 'administrator-project-page',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.scss']
})
export class ProjectePageComponent {

    currentRoute: string = 'projects';
    title: string = 'Proyectos ';
    subTitle: string = 'Gestiona los proyectos que ofrece el sitio web.';
    headers = [
        { name: 'ID', class: 'id-project', field: 'idProject' },
        { name: 'Autor', class: 'control-number', field: 'projectMemberMap' },
        { name: 'Asesor', class: 'teacher-enrollment', field: 'academyMap' },
        { name: 'Nombre', class: 'name', field: 'name' },
        { name: 'Descripcion', class: 'description', field: 'description' },
        { name: 'Acciones', class: 'actions', field: ''},
    ];    
    projects: Project[] = [];
    
    constructor(
        private administratorService: AdministratorService,
    ) { }

    ngOnInit(): void {
        this.administratorService.getProjects().subscribe(res => {
            this.projects = res.map(project => {
                project.academyMap = project.academy.map(academy => academy.firstName + ' ' + academy.lastName).join(', ');
                project.projectMemberMap = project.projectMember.map(member => member.firstName + ' ' + member.lastName).join(', ');
                return project;
            });
        });
    }
    

}