import { Component } from "@angular/core";
import { SpecialitiesService } from "../../services/specialities.service";
import { Speciality } from "../../interfaces/specialities.interface";

@Component({
    selector: 'specialities-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    specialities: Speciality[] = [];

    constructor(
        private specialitiesdService: SpecialitiesService,
    ) { }

    ngOnInit(): void {
        this.specialitiesdService.getSpecialities().subscribe(res => {
            this.specialities = res;
        });
    }
}