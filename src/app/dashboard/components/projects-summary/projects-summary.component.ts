import { Component, OnInit } from "@angular/core";
import { DashboardService } from "../../services/dashboard.service";
import { Project } from "../../interfaces/dashboard.interface";

@Component({
    selector: 'dashboard-projects-summary',
    templateUrl: './projects-summary.component.html',
    styleUrls: ['./projects-summary.component.scss']
})
export class ProjectsSummaryComponent implements OnInit{
    projects: Project[] = [];
    
    constructor(
        private dashboardService: DashboardService
    ){}

    ngOnInit(): void {
        this.dashboardService.getProjects().subscribe(res => {
            this.projects = res.slice(0, 4);
        });
    }
}