import { Component, OnInit } from "@angular/core";
import { Carrer } from "src/app/dashboard/interfaces/dashboard.interface";
import { DashboardService } from "src/app/dashboard/services/dashboard.service";

@Component({
    selector: 'shared-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    career: Carrer = {
        studyProgram: '',
        extension: '',
        phone: '',
        email: '',
        studyGridUrl: '',
        chartUrl: '',
        mission: '',
        vision: '',
        programPurpose: '',
        actionField: '',
        admissionProfile: '',
        graduationProfile: '',
        snFacebook: '',
        snYoutube: '',
        snLinkedin: '',
        status: ''
    };

    constructor(
        private dashboardService: DashboardService,
    ){}

    ngOnInit(): void {
        this.dashboardService.getCareer().subscribe(res => {
            const filter = res.filter(isc => isc.status === 'Activo');
            this.career = filter[0];
        });
    }

}