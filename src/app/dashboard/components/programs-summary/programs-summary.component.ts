import { Component } from "@angular/core";
import { DashboardService } from "../../services/dashboard.service";
import { Program } from "../../interfaces/dashboard.interface";

@Component({
    selector: 'dashboard-programs-summary',
    templateUrl: './programs-summary.component.html',
    styleUrls: ['./programs-summary.component.scss']
})
export class ProgramsSummaryComponent {
    programs: Program[] = [];
    
    constructor(
        private dashboardService: DashboardService
    ){}

    ngOnInit(): void {
        this.dashboardService.getPrograms().subscribe(res => {
            this.programs = res.slice(0, 4);
        });
    }
}