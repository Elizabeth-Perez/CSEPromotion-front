import { Component, OnInit } from '@angular/core';
import { AboutCSEService } from '../../services/about-cse.service';
import { Career } from 'src/app/administrator/interfaces/administrator.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'about-cse-content-identity',
    templateUrl: 'content-identity.component.html',
    styleUrls: ['content-identity.component.scss']
})

export class ContentIdentityComponent implements OnInit {
    tabs = [
        { name: 'Mision', icon: '', method: 'mission' },
        { name: 'Vision', icon: '', method: 'vision' },
        { name: 'Objetivo del programa', icon: '', method: 'programPurpose' },
        { name: 'Campo de accion', icon: '', method: 'actionField' }
    ]
    career: Career = {
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
        status: '',
    };

    constructor(
        private aboutCSEService: AboutCSEService,
        private toastr: ToastrService,
    ) { }

    ngOnInit() { 
        this.getData();
    }

    getData() {
        this.aboutCSEService.getCareers().subscribe(res => {
            const activeCareer = res.find(c => c.status === 'Activo');
            if (activeCareer) {
                this.career = activeCareer;
                this.tabs[0].method = this.career.mission
                this.tabs[1].method = this.career.vision
                this.tabs[2].method = this.career.programPurpose
                this.tabs[3].method = this.career.actionField
            } else {
                this.toastr.error('No se encontró ninguna carrera activa', 'Error');
            }
        });
    }
}