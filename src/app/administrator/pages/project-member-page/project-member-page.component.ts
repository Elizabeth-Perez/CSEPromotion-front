import { Component, OnInit } from '@angular/core';
import { ProjectMember } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';

@Component({
    selector: 'administrator-project-member-page',
    templateUrl: './project-member-page.component.html',
    styleUrls: ['./project-member-page.component.scss']
})

export class ProjectMemberPageComponent implements OnInit {
    currentRoute: string = 'project-members';
    title: string = 'Alumnos';
    subTitle: string = 'Gestiona los alumnos que ofrece el sitio web.';
    headers = [
        { name: 'Numero de control', class: 'control-number', field: 'controlNumber' },
        { name: 'Primer nombre', class: 'first-name', field: 'firstName' },
        { name: 'Segundo nombre', class: 'last-name', field: 'lastName' },
        { name: 'Acciones', class: 'actions', field: ''},
    ];    
    projectMembers: ProjectMember[] = [];
    
    constructor(
        private administratorService: AdministratorService,
    ) { }

    ngOnInit(): void {
        this.administratorService.getProjectMembers().subscribe(res => {
            this.projectMembers = res;
        });
    }
}