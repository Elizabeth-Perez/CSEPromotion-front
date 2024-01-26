import { Component, OnInit } from "@angular/core";
import { Speciality } from "../../interfaces/dashboard.interface";
import { DashboardService } from "../../services/dashboard.service";

@Component({
    selector: 'dashboard-specialities-summary',
    templateUrl: './specialities-summary.component.html',
    styleUrls: ['./specialities-summary.component.scss']
})
export class SpecialitiesSummaryComponent implements OnInit{
    specialities: Speciality[] = [];

    constructor(
        private dashboardService: DashboardService,
    ){}

    ngOnInit(): void {
        this.dashboardService.getSpecialities().subscribe(res => {
            this.specialities = res.slice(0, 3);
        })
    }
}