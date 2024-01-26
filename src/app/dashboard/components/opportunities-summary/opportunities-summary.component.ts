import { Component } from "@angular/core";
import { Opportunity } from "../../interfaces/dashboard.interface";
import { DashboardService } from "../../services/dashboard.service";

@Component({
    selector: 'dashboard-opportunities-summary',
    templateUrl: './opportunities-summary.component.html',
    styleUrls: ['./opportunities-summary.component.scss']
})
export class OpportunitiesSummaryComponent {
    opportunities: Opportunity[] = [];

    constructor(
        private dashboardService: DashboardService,
    ){}

    ngOnInit(): void {
        this.dashboardService.getOpportunities().subscribe(res => {
            this.opportunities = res.slice(0, 5);
        })
    }
}