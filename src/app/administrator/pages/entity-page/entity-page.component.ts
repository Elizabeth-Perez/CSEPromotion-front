import { Component, OnInit } from '@angular/core';
import { Entity, ProjectMember } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';

@Component({
    selector: 'administrator-entity-page',
    templateUrl: './entity-page.component.html',
    styleUrls: ['./entity-page.component.scss']
})

export class EntityPageComponent implements OnInit {
    currentRoute: string = 'entities';
    title: string = 'Entidades';
    subTitle: string = 'Gestiona las entidades que ofrece el sitio web.';
    headers = [
        { name: 'ID', class: 'id-entity', field: 'idEntity' },
        { name: 'Nombre', class: 'name', field: 'name' },
        { name: 'Acciones', class: 'actions', field: ''},
    ];    
    entities: Entity[] = [];
    
    constructor(
        private administratorService: AdministratorService,
    ) { }

    ngOnInit(): void {
        this.administratorService.getEntities().subscribe(res => {
            this.entities = res;
        });
    }
}