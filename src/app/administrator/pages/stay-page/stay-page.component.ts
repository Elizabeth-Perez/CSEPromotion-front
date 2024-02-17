import { Component, OnInit } from '@angular/core';
import { ProjectMember, Stay } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';

@Component({
    selector: 'administrator-stay-page',
    templateUrl: './stay-page.component.html',
    styleUrls: ['./stay-page.component.scss']
})

export class StayPageComponent implements OnInit {
    currentRoute: string = 'stays';
    title: string = 'Estancias';
    subTitle: string = 'Gestiona las estancias que ofrece el sitio web.';
    headers = [
        { name: 'ID', class: 'id-stay', field: 'idStay' },
        { name: 'Nombre', class: 'name', field: 'name' },
        { name: 'Acciones', class: 'actions', field: ''},
    ];    
    stays: Stay[] = [];
    
    constructor(
        private administratorService: AdministratorService,
    ) { }

    ngOnInit(): void {
        this.administratorService.getStays().subscribe(res => {
            this.stays = res;
        });
    }
}