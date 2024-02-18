import { Component } from '@angular/core';
import { Opportunity } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';

@Component({
    selector: 'administrator-opportunity-page',
    templateUrl: './opportunity-page.component.html',
    styleUrls: ['./opportunity-page.component.scss']
})
export class OpportunityPageComponent {

    currentRoute: string = 'opportunities';
    title: string = 'Oportunidades ';
    subTitle: string = 'Gestiona las oportunidades que ofrece el sitio web.';
    headers = [
        { name: 'ID', class: 'id-opportunity', field: 'idOpportunity' },
        { name: 'Entidad', class: 'entity', field: 'entityMap' },
        { name: 'Participantes', class: 'participant', field: 'participantMap' },
        { name: 'Estancias', class: 'stays', field: 'stayMap' },
        { name: 'Acciones', class: 'actions', field: ''},
    ];    
    opportunities: Opportunity[] = [];
    
    constructor(
        private administratorService: AdministratorService,
    ) { }

    ngOnInit(): void {
        this.administratorService.getOpportunities().subscribe(res => {
            this.opportunities = res.map(opportunity => {
                opportunity.entityMap = opportunity.entity.name;
                opportunity.participantMap = opportunity.participant.map(participant => participant.type).join(', ');
                opportunity.stayMap = opportunity.stay.map(stay => stay.name).join(', ');
                return opportunity;
            });
        });
    }

}
